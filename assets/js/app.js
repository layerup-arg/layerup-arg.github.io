<!-- ========== BEGIN FILE: /assets/js/app.js ========== -->
(async () => {
  const nav = document.getElementById('categoriesNav');
  const content = document.getElementById('content');

  // Build categories & sections
  function renderCategories(data) {
    const grid = document.createElement('div');
    grid.className = 'container mx-auto px-4';

    const inner = document.createElement('div');
    inner.className = 'grid grid-cols-2 gap-3';

    data.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'category-card p-3 rounded-xl text-center shadow-lg bg-white';
      btn.innerHTML = `<div class="text-2xl mb-1">${cat.title.split(' ')[0]}</div><span class="font-semibold text-xs ${cat.accent}">${cat.title.replace(/^\S+\s/, '')}</span>`;
      btn.addEventListener('click', () => scrollToCategory(cat.id));
      inner.appendChild(btn);
    });

    grid.appendChild(inner);
    nav.appendChild(grid);
  }

  function scrollToCategory(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});
  }
  window.scrollToCategory = scrollToCategory;

  function sectionTitle(cat){
    return `<h2 class="text-2xl font-bold text-center mb-6 ${cat.accent}">${cat.title}</h2>`;
  }

  function renderSections(data){
    data.categories.forEach(cat => {
      const sec = document.createElement('section');
      sec.id = cat.id;
      sec.className = `py-8 ${cat.id === 'clickers' || cat.id === 'sorpresas' ? 'bg-white/50' : ''}`;

      const wrap = document.createElement('div');
      wrap.className = 'container mx-auto px-4';

      wrap.insertAdjacentHTML('beforeend', sectionTitle(cat));

      if (!cat.items.length) {
        wrap.insertAdjacentHTML('beforeend', '<p class="text-center text-sm text-gray-500">Próximamente…</p>');
      } else {
        const row = document.createElement('div');
        row.className = 'scroll-x';

        cat.items.forEach(item => {
          const card = document.createElement('div');
          card.className = `product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 ${cat.cardSize}`;
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

      sec.appendChild(wrap);
      content.appendChild(sec);
    });
  }

  // Gallery logic
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
  function closeModal() { modal.classList.add('hidden'); document.body.style.overflow = ''; }

  function render() {
    if (!images.length) return;
    const safeIndex = ((index % images.length) + images.length) % images.length;
    index = safeIndex;
    imgEl.src = images[index];
    imgEl.alt = `${title} - imagen ${index + 1}`;
    captionEl.textContent = title;
    idxEl.textContent = index + 1;
    updateDots();
    updateThumbs();
  }
  function next(){ if(!images.length) return; index = (index + 1) % images.length; render(); }
  function prev(){ if(!images.length) return; index = (index - 1 + images.length) % images.length; render(); }

  function buildDots(){ dotsEl.innerHTML = ''; (images||[]).forEach((_,i)=>{ const b=document.createElement('button'); b.type='button'; b.className='w-2.5 h-2.5 rounded-full bg-gray-300 aria-[current=true]:bg-indigo-500'; b.setAttribute('aria-label',`Ir a imagen ${i+1}`); b.addEventListener('click',()=>{index=i;render();}); dotsEl.appendChild(b); }); }
  function updateDots(){ [...dotsEl.children].forEach((dot,i)=>{ dot.setAttribute('aria-current', i===index?'true':'false'); }); }

  function buildThumbs(){ thumbsEl.innerHTML=''; (images||[]).forEach((src,i)=>{ const btn=document.createElement('button'); btn.type='button'; btn.className='relative flex-shrink-0'; btn.addEventListener('click',()=>{index=i;render();}); const img=document.createElement('img'); img.src=src; img.alt=`Miniatura ${i+1}`; img.loading='lazy'; img.className='h-16 w-24 object-cover rounded-lg shadow ring-1 ring-gray-200'; btn.appendChild(img); thumbsEl.appendChild(btn); }); }
  function updateThumbs(){ [...thumbsEl.querySelectorAll('img')].forEach((img,i)=>{ if(i===index) img.classList.add('thumb-active'); else img.classList.remove('thumb-active'); }); const activeBtn=thumbsEl.children[index]; activeBtn?.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'}); }

  btnNext?.addEventListener('click', next);
  btnPrev?.addEventListener('click', prev);
  btnClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target.dataset.close === 'true') closeModal(); });
  window.addEventListener('keydown', (e) => { if (modal.classList.contains('hidden')) return; if (e.key==='Escape') closeModal(); if (e.key==='ArrowRight') next(); if (e.key==='ArrowLeft') prev(); });
  let startX=0; imgEl.addEventListener('touchstart',(e)=>{startX=e.touches[0].clientX;},{passive:true}); imgEl.addEventListener('touchend',(e)=>{const dx=e.changedTouches[0].clientX-startX; if(Math.abs(dx)>40) (dx<0?next():prev());},{passive:true});

  // Delegación para abrir la galería
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const imgs = (card.dataset.images || '').split('|').filter(Boolean);
    const ttl = card.dataset.title || card.querySelector('h3')?.textContent?.trim() || 'Galería';
    openModal(imgs, ttl);
  });

  // Load data
  try {
    const res = await fetch('assets/data/products.json', {cache:'no-store'});
    const data = await res.json();
    renderCategories(data);
    renderSections(data);
  } catch (err) {
    console.error('No se pudo cargar products.json', err);
    const fallback = { categories: [] };
    renderCategories(fallback); renderSections(fallback);
  }
})();
<!-- ========== END FILE: /assets/js/app.js ========== -->
