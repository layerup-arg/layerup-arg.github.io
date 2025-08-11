<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Layer Up - Catálogo 3D</title>
  <meta name="description" content="Layer Up: impresión 3D personalizada. Llaveros, figuras, clickers y sorpresas. Personalización para souvenirs." />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    * { font-family: 'Poppins', sans-serif; }
    .smooth-scroll { scroll-behavior: smooth; }
    .category-card, .product-card { transition: transform .3s ease, box-shadow .3s ease; }
    .category-card:hover { transform: translateY(-4px); }
    .product-card:hover { transform: scale(1.02); }
    .gradient-bg { background: linear-gradient(135deg, #ffeef8 0%, #f0f4ff 50%, #fff2e6 100%); }
    .whatsapp-float { position: fixed; bottom: 20px; right: 20px; z-index: 1000; animation: pulse 2s infinite; }
    @keyframes pulse { 0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)} }
    @media (prefers-reduced-motion: reduce) {
      .smooth-scroll { scroll-behavior: auto; }
      .whatsapp-float { animation: none; }
      .category-card, .product-card { transition: none; }
    }
    .placeholder-img { background: linear-gradient(45deg, #e8f4f8, #f8e8f4); display:flex; align-items:center; justify-content:center; font-size:2rem; }
    .scroll-container { overflow-x:auto; scrollbar-width:none; -ms-overflow-style:none; }
    .scroll-container::-webkit-scrollbar { display:none; }
    .infinite-scroll { display:flex; }
    /* Miniaturas del modal */
    .thumb-active { outline: 2px solid #6366f1; outline-offset: 2px; }
  </style>
</head>
<body class="gradient-bg min-h-screen smooth-scroll">
  <!-- Header -->
  <header class="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="text-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Layer Up</h1>
        <p class="text-sm text-gray-600 font-medium mt-1">Impresión 3D Personalizada</p>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="py-4 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-xl font-bold text-gray-800 mb-2 leading-tight">
        Crea, Personaliza, <span class="text-purple-500">Imprime</span>
      </h2>
      <p class="text-sm text-gray-600 mb-4 px-2">Descubre nuestro catálogo de productos únicos impresos en 3D</p>
      <div class="bg-yellow-100 border-l-4 border-yellow-400 p-2 rounded-lg mx-2">
        <p class="text-yellow-800 font-medium text-xs">✨ Personalización especial para souvenirs disponible</p>
      </div>
    </div>
  </section>

  <!-- Categorías -->
  <nav class="py-4" role="navigation" aria-label="Categorías">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 gap-3">
        <button type="button" onclick="scrollToCategory('llaveros')" class="category-card bg-pink-100 hover:bg-pink-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🔑</div><span class="font-semibold text-pink-800 text-xs">Llaveros</span>
        </button>
        <button type="button" onclick="scrollToCategory('clickers')" class="category-card bg-blue-100 hover:bg-blue-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎮</div><span class="font-semibold text-blue-800 text-xs">Clickers</span>
        </button>
        <button type="button" onclick="scrollToCategory('figuras')" class="category-card bg-green-100 hover:bg-green-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎭</div><span class="font-semibold text-green-800 text-xs">Figuras</span>
        </button>
        <button type="button" onclick="scrollToCategory('sorpresas')" class="category-card bg-purple-100 hover:bg-purple-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎁</div><span class="font-semibold text-purple-800 text-xs">Sorpresas</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Llaveros -->
  <section id="llaveros" class="py-4">
    <div class="container mx-auto px-4">
      <h2 class="text-lg font-bold text-center mb-4 text-pink-800">🔑 Llaveros Únicos</h2>
      <div class="scroll-container">
        <div class="infinite-scroll gap-3">
          <!-- EJEMPLOS con data-images -->
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32"
               data-title="Llavero Celular Retro"
               data-images="https://picsum.photos/id/1015/1000/750|https://picsum.photos/id/1016/1000/750|https://picsum.photos/id/1018/1000/750">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">📱</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Celular Retro</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Diseño nostálgico</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32"
               data-title="Llavero Auto Deportivo"
               data-images="https://picsum.photos/id/1025/1000/750|https://picsum.photos/id/1035/1000/750|https://picsum.photos/id/1041/1000/750">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🚗</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Auto Deportivo</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Réplica de tu auto</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32"
               data-title="Llavero Nota Musical"
               data-images="https://picsum.photos/id/1050/1000/750|https://picsum.photos/id/1051/1000/750|https://picsum.photos/id/1052/1000/750">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🎵</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Nota Musical</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para amantes música</p>
            </div>
          </div>

          <!-- Más tarjetas… -->
        </div>
      </div>
    </div>
  </section>

  <!-- Clickers -->
  <section id="clickers" class="py-8 bg-white/50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-800">🎮 Clickers Antiestrés</h2>
      <div class="scroll-container">
        <div class="infinite-scroll gap-4">
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40"
               data-title="Clicker Básico"
               data-images="https://picsum.photos/id/1060/1000/750|https://picsum.photos/id/1061/1000/750|https://picsum.photos/id/1062/1000/750">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🔘</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Básico</h3>
              <p class="text-xs text-gray-600 mt-1">Diseño simple y efectivo</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40"
               data-title="Clicker Diana"
               data-images="https://picsum.photos/id/1065/1000/750|https://picsum.photos/id/1066/1000/750|https://picsum.photos/id/1067/1000/750">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🎯</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Diana</h3>
              <p class="text-xs text-gray-600 mt-1">Con textura antideslizante</p>
            </div>
          </div>

          <!-- Más tarjetas… -->
        </div>
      </div>
    </div>
  </section>

  <!-- Figuras -->
  <section id="figuras" class="py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-green-800">🎭 Figuras Coleccionables</h2>
      <div class="scroll-container">
        <div class="infinite-scroll gap-4">
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40"
               data-title="Figura Dragón"
               data-images="https://picsum.photos/id/1074/1000/750|https://picsum.photos/id/1080/1000/750|https://picsum.photos/id/1084/1000/750">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🐉</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Dragón</h3>
              <p class="text-xs text-gray-600 mt-1">Criatura mítica detallada</p>
            </div>
          </div>

          <!-- Más tarjetas… -->
        </div>
      </div>
    </div>
  </section>

  <!-- Sorpresas -->
  <section id="sorpresas" class="py-8 bg-white/50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-purple-800">🎁 Sorpresas Especiales</h2>
      <div class="scroll-container">
        <div class="infinite-scroll gap-4">
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40"
               data-title="Caja Sorpresa Circo"
               data-images="https://picsum.photos/id/109/1000/750|https://picsum.photos/id/110/1000/750|https://picsum.photos/id/111/1000/750">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🎪</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Caja Sorpresa Circo</h3>
              <p class="text-xs text-gray-600 mt-1">Diversión garantizada</p>
            </div>
          </div>
          <!-- Más tarjetas… -->
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
      <h3 class="text-lg font-bold mb-2">Layer Up</h3>
      <p class="text-gray-300 mb-3 text-xs">Transformamos tus ideas en realidad con impresión 3D de alta calidad</p>
      <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mx-2">
        <p class="font-semibold text-xs">🎨 Personalización especial para souvenirs</p>
        <p class="text-xs mt-1">Convierte cualquier ocasión en un recuerdo único</p>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Float Button -->
  <a
    href="https://wa.me/1234567890?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20productos%20de%20Layer%20Up"
    class="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl transition-all duration-300"
    aria-label="Contactar por WhatsApp">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  </a>

  <!-- Modal Galería -->
  <div id="galleryModal" class="fixed inset-0 z-[1000] hidden" role="dialog" aria-modal="true" aria-labelledby="galleryTitle">
    <!-- Fondo -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" data-close="true"></div>

    <!-- Contenido -->
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h3 id="galleryTitle" class="text-sm font-semibold text-gray-800">Galería</h3>
          <button id="galleryClose" class="p-2 rounded-full hover:bg-gray-100" aria-label="Cerrar">✖</button>
        </div>

        <!-- Viewport -->
        <div class="relative bg-black">
          <img id="galleryImage" src="" alt="" class="mx-auto max-h-[70vh] w-auto select-none">
          <!-- Botones -->
          <button id="galleryPrev" class="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow" aria-label="Anterior">‹</button>
          <button id="galleryNext" class="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow" aria-label="Siguiente">›</button>
        </div>

        <!-- Indicadores + Miniaturas -->
        <div class="px-4 pt-3">
          <!-- Dots -->
          <div id="galleryDots" class="flex items-center justify-center gap-2 py-1"></div>
          <!-- Thumbs -->
          <div class="mt-2 overflow-x-auto">
            <div id="galleryThumbs" class="flex gap-2 min-w-full pb-3"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between px-4 py-3 border-t text-xs text-gray-600">
          <div id="galleryCaption" class="truncate">—</div>
          <div><span id="galleryIndex">1</span>/<span id="galleryTotal">1</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    function scrollToCategory(categoryId) {
      const el = document.getElementById(categoryId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Smooth para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Elevación en hover (con JS para mantener tu efecto)
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
      });
    });
  </script>

  <!-- Galería: lógica -->
  <script>
  (() => {
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

    const placeholders = [
      'https://picsum.photos/id/1011/1000/750',
      'https://picsum.photos/id/1018/1000/750',
      'https://picsum.photos/id/1020/1000/750'
    ];

    function openModal(imgs, ttl) {
      images = (imgs && imgs.length) ? imgs : placeholders;
      title = ttl || 'Galería';
      index = 0;
      totalEl.textContent = images.length;
      buildDots();
      buildThumbs();
      render();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      prefetchNeighbor(index + 1);
      prefetchNeighbor(index - 1);
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function render() {
      const safeIndex = ((index % images.length) + images.length) % images.length;
      index = safeIndex;
      imgEl.src = images[index];
      imgEl.alt = `${title} - imagen ${index + 1}`;
      captionEl.textContent = title;
      idxEl.textContent = index + 1;
      updateDots();
      updateThumbs();
    }

    function next() {
      index = (index + 1) % images.length;
      render();
      prefetchNeighbor(index + 1);
    }

    function prev() {
      index = (index - 1 + images.length) % images.length;
      render();
      prefetchNeighbor(index - 1);
    }

    function prefetchNeighbor(n) {
      const i = ((n % images.length) + images.length) % images.length;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = images[i];
      document.head.appendChild(link);
    }

    // Dots
    function buildDots() {
      dotsEl.innerHTML = '';
      for (let i = 0; i < images.length; i++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'w-2.5 h-2.5 rounded-full bg-gray-300 aria-[current=true]:bg-indigo-500';
        b.setAttribute('aria-label', `Ir a imagen ${i+1}`);
        b.addEventListener('click', () => { index = i; render(); });
        dotsEl.appendChild(b);
      }
    }
    function updateDots() {
      [...dotsEl.children].forEach((dot, i) => {
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    }

    // Thumbnails
    function buildThumbs() {
      thumbsEl.innerHTML = '';
      images.forEach((src, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'relative flex-shrink-0';
        btn.addEventListener('click', () => { index = i; render(); });

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Miniatura ${i+1}`;
        img.className = 'h-16 w-24 object-cover rounded-lg shadow ring-1 ring-gray-200';

        btn.appendChild(img);
        thumbsEl.appendChild(btn);
      });
    }
    function updateThumbs() {
      [...thumbsEl.querySelectorAll('img')].forEach((img, i) => {
        if (i === index) img.classList.add('thumb-active');
        else img.classList.remove('thumb-active');
      });
      // Auto-scroll para mantener la miniatura activa a la vista
      const activeBtn = thumbsEl.children[index];
      if (activeBtn && activeBtn.scrollIntoView) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }

    // Eventos UI
    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);
    btnClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target.dataset.close === 'true') closeModal(); });

    // Teclado
    window.addEventListener('keydown', (e) => {
      if (modal.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // Swipe táctil
    let startX = 0;
    imgEl.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, {passive:true});
    imgEl.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    }, {passive:true});

    // Delegación: abrir desde cualquier .product-card
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (!card) return;
      const str = card.dataset.images || '';
      const imgs = str.split('|').map(s => s.trim()).filter(Boolean);
      const ttl = card.dataset.title || card.querySelector('h3')?.textContent?.trim() || 'Galería';
      openModal(imgs, ttl);
    });
  })();
  </script>
</body>
</html>
