(async () => {
  const content = document.getElementById('content');

  function scrollToCategory(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});
  }
  window.scrollToCategory = scrollToCategory;

  function updateHeaderHeightVar(){
    const header = document.querySelector('.lu-header');
    if(!header) return;
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--lu-header-height', `${Math.round(h)}px`);
  }
  window.addEventListener('resize', updateHeaderHeightVar);
  window.addEventListener('load', updateHeaderHeightVar);

  // Render de categorías en sub-bar y autoajuste
  function renderCategories(sections) {
    updateHeaderHeightVar();

    const subbar = document.getElementById('lu-subbar');
    const nav = document.getElementById('categoriesNav');
    let inner = nav.querySelector('.cat-bar-inner');
    if(!inner){
      inner = document.createElement('div');
      inner.className = 'cat-bar-inner';
      nav.appendChild(inner);
    }
    inner.innerHTML = '';

    const filteredSections = sections.filter(sec => sec.id !== 'novedadesDestacadas');

    filteredSections.forEach(sec => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat-pill';
      btn.setAttribute('title', sec.title);

      const icon = (sec.title || '').split(' ')[0]; // emoji
      const label = (sec.title || '').replace(/^\S+\s/, '');

      btn.innerHTML = `
        <span class="emoji">${icon}</span>
        <span class="label">${label}</span>
      `;

      btn.addEventListener('click', () => scrollToCategory(sec.id));
      inner.appendChild(btn);
    });

    fitPillsToOneLine(inner, subbar);
  }

  function fitPillsToOneLine(innerEl, containerEl){
    if(!innerEl || !containerEl) return;
    innerEl.style.transform = 'scale(1)';
    const available = containerEl.clientWidth - 16;
    const children = Array.from(innerEl.children);
    const totalWidth = children.reduce((sum, el) => sum + el.offsetWidth, 0) + (children.length - 1) * 8;
    if (totalWidth <= available) return;
    const minScale = 0.72;
    const targetScale = Math.max(minScale, Math.min(1, available / totalWidth));
    innerEl.style.transform = `scale(${targetScale})`;
    innerEl.style.transformOrigin = 'left center';
    innerEl.style.height = `30px`;
  }
  window.addEventListener('resize', () => {
    const subbar = document.getElementById('lu-subbar');
    const inner = document.querySelector('#categoriesNav .cat-bar-inner');
    if(inner && subbar) fitPillsToOneLine(inner, subbar);
  });

  // Render de novedades destacadas
  function renderNovedadesDestacadas(sec, items) {
    if (!items.length) return;
    const section = document.createElement('section');
    section.id = sec.id;
    section.className = 'py-8 novedades-section';

    const wrap = document.createElement('div');
    wrap.className = 'container mx-auto px-4';
    wrap.insertAdjacentHTML('beforeend', `<h2 class="text-2xl font-bold text-center mb-6 text-blue-400">Novedades Destacadas</h2>`);

    const row = document.createElement('div');
    row.className = 'scroll-x';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'novedad-card bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0';
      card.dataset.title = item.title;
      card.dataset.images = (item.images || []).join('|');

      const img = document.createElement('img');
      img.src = item.images?.[0] || '';
      img.alt = item.title;
      img.loading = 'lazy';
      img.className = 'novedad-img';

      const body = document.createElement('div');
      body.className = 'p-4';
      body.innerHTML = `<h3 class="font-semibold text-gray-800 text-base truncate">${item.title}</h3><p class="text-sm text-gray-600 mt-1">${item.subtitle || ''}</p>`;

      card.appendChild(img);
      card.appendChild(body);
      row.appendChild(card);
    });

    wrap.appendChild(row);
    section.appendChild(wrap);
    content.appendChild(section);
  }

  // Render de secciones por categoría
  function sectionTitle(sec){
    return `<h2 class="text-2xl font-bold text-center mb-6 ${sec.accent || ''}">${sec.title}</h2>`;
  }

  function renderCategoria(sec, items){
    const section = document.createElement('section');
    section.id = sec.id;
    section.className = `py-8 ${(['clickers','sorpresas'].includes(sec.id)) ? 'bg-white/50' : ''}`;

    const wrap = document.createElement('div');
    wrap.className = 'container mx-auto px-4';
    wrap.insertAdjacentHTML('beforeend', sectionTitle(sec));

    if (!items.length) {
      wrap.insertAdjacentHTML('beforeend', '<p class="text-center text-sm text-gray-500">Próximamente…</p>');
    } else {
      const row = document.createElement('div');
      row.className = 'scroll-x';

      items.forEach(item => {
        const card = document.createElement('div');
        card.className = `product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 ${sec.cardSize || ''}`;
        card.dataset.title = item.title;
        card.dataset.images = (item.images || []).join('|');

        const img = document.createElement('img');
        img.src = item.images?.[0] || '';
        img.alt = item.title;
        img.loading = 'lazy';
        img.className = 'card-img';

        const body = document.createElement('div');
        body.className = 'p-3';
        body.innerHTML = `<h3 class="font-semibold text-gray-800 text-sm truncate">${item.title}</h3><p class="text-xs text-gray-600 mt-1">${item.subtitle || ''}</p>`;

        card.appendChild(img);
        card.appendChild(body);
        row.appendChild(card);
      });
      wrap.appendChild(row);
    }

    section.appendChild(wrap);
    content.appendChild(section);
  }

  // Modal Galería (igual que antes)
  const modal = document.getElementById('galleryModal');
  const imgEl = document.getElementById('galleryImage');
  const captionEl = document.getElementById('galleryCaption');
  const idxEl = document.getElementById('galleryIndex');
  const totalEl = document.getElementById('galleryTotal');
  const btnPrev = document.getElementById('galleryPrev');
  const btnNext = document.getElementById('galleryNext');
  const btnClose = document.getElementById('galleryClose');
  const dotsEl = document.getElementById('galleryDots');
  const thumbsEl = document.getElementById('galleryThumbs');

  let images = [];
  let title = '';
  let index = 0;

  function openModal(imgs, ttl) {
    images = (imgs && imgs.length) ? imgs : [];
    title = ttl || 'Galería';
    index = 0;
    totalEl.textContent = images.length || 1;
    buildDots();
    buildThumbs();
    render();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){ modal.classList.add('hidden'); document.body.style.overflow=''; }

  function render(){
    if(!images.length) return;
    index = ((index % images.length) + images.length) % images.length;
    imgEl.src = images[index];
    imgEl.alt = `${title} - imagen ${index+1}`;
    captionEl.textContent = title;
    idxEl.textContent = index + 1;
    updateDots();
    updateThumbs();
  }
  function next(){ if(!images.length) return; index = (index+1)%images.length; render(); }
  function prev(){ if(!images.length) return; index = (index-1+images.length)%images.length; render(); }

  function buildDots(){ 
    dotsEl.innerHTML=''; 
    (images||[]).forEach((_,i)=>{
      const b=document.createElement('button');
      b.type='button';
      b.className='w-2.5 h-2.5 rounded-full bg-gray-300 aria-[current=true]:bg-indigo-500';
      b.setAttribute('aria-label',`Ir a imagen ${i+1}`);
      b.addEventListener('click',()=>{index=i;render();});
      dotsEl.appendChild(b);
    });
  }
  function updateDots(){ [...dotsEl.children].forEach((dot,i)=>{ dot.setAttribute('aria-current', i===index?'true':'false'); }); }

  function buildThumbs(){
    thumbsEl.innerHTML='';
    (images||[]).forEach((src,i)=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='relative flex-shrink-0';
      btn.addEventListener('click',()=>{index=i;render();});
      const img=document.createElement('img');
      img.src=src; img.alt=`Miniatura ${i+1}`; img.loading='lazy';
      img.className='h-16 w-24 object-cover rounded-lg shadow ring-1 ring-gray-200';
      btn.appendChild(img); thumbsEl.appendChild(btn);
    });
  }
  function updateThumbs(){
    [...thumbsEl.querySelectorAll('img')].forEach((img,i)=>{
      if(i===index) img.classList.add('thumb-active'); else img.classList.remove('thumb-active');
    });
    const activeBtn=thumbsEl.children[index];
    activeBtn?.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  }

  btnNext?.addEventListener('click', next);
  btnPrev?.addEventListener('click', prev);
  btnClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e)=>{ if(e.target.dataset.close==='true') closeModal(); });
  window.addEventListener('keydown', (e)=>{ if(modal.classList.contains('hidden')) return; if(e.key==='Escape') closeModal(); if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); });

  let startX=0;
  imgEl.addEventListener('touchstart',(e)=>{startX=e.touches[0].clientX;},{passive:true});
  imgEl.addEventListener('touchend',(e)=>{const dx=e.changedTouches[0].clientX-startX; if(Math.abs(dx)>40) (dx<0?next():prev());},{passive:true});

  // Delegado de clicks en cards
  content.addEventListener('click', e => {
    const card = e.target.closest('.product-card, .novedad-card');
    if (!card) return;
    const title = card.dataset.title || 'Galería';
    const imgs = (card.dataset.images || '').split('|').filter(Boolean);
    openModal(imgs, title);
  });

  // Carga de datos y render desde archivos separados
try {
  const res = await fetch('assets/data/products.json', {cache:'no-store'});
  if(!res.ok) throw new Error('HTTP '+res.status);
  const data = await res.json();
  const sections = data.sections || [];
  console.log('Secciones:', sections);

  renderCategories(sections);

  for (const sec of sections) {
    console.log('Cargando sección:', sec.id, sec.file);
    const itemsRes = await fetch(`assets/data/${sec.file}`);
    if(!itemsRes.ok) throw new Error(`No se pudo cargar ${sec.file}: HTTP ${itemsRes.status}`);
    const items = await itemsRes.json();
    console.log('Items de', sec.id, items);

    if (sec.id === 'novedadesDestacadas') {
      renderNovedadesDestacadas(sec, items);
    } else {
      renderCategoria(sec, items);
    }
  }
} catch (err) {
  console.error('Error cargando products.json o archivos de sección:', err);
  const fallback = [];
  renderCategories(fallback);
  const warn = document.createElement('p');
  warn.className = 'text-center text-sm text-red-600';
  warn.textContent = 'No se pudo cargar el catálogo. Ver consola/Network para detalles.';
  content.appendChild(warn);
}
})();