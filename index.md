<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Layer Up - Catálogo 3D</title>
  <meta name="description" content="Layer Up: impresión 3D personalizada. Llaveros, figuras, clickers y sorpresas. Personalización para souvenirs." />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * { font-family: 'Poppins', sans-serif; }

    .smooth-scroll { scroll-behavior: smooth; }

    .category-card,
    .product-card { transition: transform .3s ease, box-shadow .3s ease; }
    .category-card:hover { transform: translateY(-4px); }
    .product-card:hover { transform: scale(1.02); }

    .gradient-bg {
      background: linear-gradient(135deg, #ffeef8 0%, #f0f4ff 50%, #fff2e6 100%);
    }

    .whatsapp-float {
      position: fixed; bottom: 20px; right: 20px; z-index: 1000;
      animation: pulse 2s infinite;
    }
    @keyframes pulse { 0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)} }
    @media (prefers-reduced-motion: reduce) {
      .smooth-scroll { scroll-behavior: auto; }
      .whatsapp-float { animation: none; }
      .category-card, .product-card { transition: none; }
    }

    .placeholder-img {
      background: linear-gradient(45deg, #e8f4f8, #f8e8f4);
      display: flex; align-items: center; justify-content: center; font-size: 2rem;
    }

    .scroll-container { overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; }
    .scroll-container::-webkit-scrollbar { display: none; }

    .infinite-scroll { display: flex; }
  </style>
</head>
<body class="gradient-bg min-h-screen smooth-scroll">
  <!-- Header -->
  <header class="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="text-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Layer Up
        </h1>
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
          <div class="text-2xl mb-1">🔑</div>
          <span class="font-semibold text-pink-800 text-xs">Llaveros</span>
        </button>
        <button type="button" onclick="scrollToCategory('clickers')" class="category-card bg-blue-100 hover:bg-blue-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎮</div>
          <span class="font-semibold text-blue-800 text-xs">Clickers</span>
        </button>
        <button type="button" onclick="scrollToCategory('figuras')" class="category-card bg-green-100 hover:bg-green-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎭</div>
          <span class="font-semibold text-green-800 text-xs">Figuras</span>
        </button>
        <button type="button" onclick="scrollToCategory('sorpresas')" class="category-card bg-purple-100 hover:bg-purple-200 p-3 rounded-xl text-center shadow-lg">
          <div class="text-2xl mb-1">🎁</div>
          <span class="font-semibold text-purple-800 text-xs">Sorpresas</span>
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
          <!-- Tarjetas (ejemplos) -->
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">📱</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Celular Retro</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Diseño nostálgico</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🚗</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Auto Deportivo</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Réplica de tu auto</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🎵</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Nota Musical</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para amantes música</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🐾</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Huella Mascota</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Personalizable</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">⚽</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Pelota Fútbol</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para fanáticos</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🏠</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Casa</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Réplica de tu hogar</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">💝</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Corazón 3D</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para regalos</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🎓</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Graduación</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Logro académico</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🌟</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Estrella</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Diseño luminoso</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🔧</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Herramienta</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para técnicos</p>
            </div>
          </div>

          <!-- Duplicados para “loop” visual -->
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">📱</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Celular Retro</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Diseño nostálgico</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🚗</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Auto Deportivo</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Réplica de tu auto</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🎵</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Nota Musical</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para amantes música</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">🐾</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Huella Mascota</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Personalizable</p>
            </div>
          </div>

          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32">
            <div class="placeholder-img h-24 text-pink-300 text-lg" aria-hidden="true">⚽</div>
            <div class="p-2">
              <h3 class="font-semibold text-gray-800 text-xs">Llavero Pelota Fútbol</h3>
              <p class="text-xs text-gray-600 mt-1 leading-tight">Para fanáticos</p>
            </div>
          </div>
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
          <!-- Ejemplos -->
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🔘</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Básico</h3>
              <p class="text-xs text-gray-600 mt-1">Diseño simple y efectivo</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🎯</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Diana</h3>
              <p class="text-xs text-gray-600 mt-1">Con textura antideslizante</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🌈</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Arcoíris</h3>
              <p class="text-xs text-gray-600 mt-1">Múltiples colores vibrantes</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">⭐</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Estrella</h3>
              <p class="text-xs text-gray-600 mt-1">Forma única y ergonómica</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🔥</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Llama</h3>
              <p class="text-xs text-gray-600 mt-1">Diseño dinámico y moderno</p>
            </div>
          </div>
          <!-- Duplicados -->
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">🌊</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Onda</h3>
              <p class="text-xs text-gray-600 mt-1">Superficie ondulada relajante</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-blue-300" aria-hidden="true">💎</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Clicker Diamante</h3>
              <p class="text-xs text-gray-600 mt-1">Facetas brillantes y elegantes</p>
            </div>
          </div>
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
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🦸</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Superhéroe</h3>
              <p class="text-xs text-gray-600 mt-1">Diseño heroico personalizable</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🐉</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Dragón</h3>
              <p class="text-xs text-gray-600 mt-1">Criatura mítica detallada</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🤖</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Robot</h3>
              <p class="text-xs text-gray-600 mt-1">Diseño futurista articulado</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🦄</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Unicornio</h3>
              <p class="text-xs text-gray-600 mt-1">Mágico y colorido</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-green-300" aria-hidden="true">🐱</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Figura Gato Kawaii</h3>
              <p class="text-xs text-gray-600 mt-1">Estilo japonés adorable</p>
            </div>
          </div>
          <!-- Más duplicados si hace falta -->
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
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🎪</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Caja Sorpresa Circo</h3>
              <p class="text-xs text-gray-600 mt-1">Diversión garantizada</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🎨</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Kit Creativo</h3>
              <p class="text-xs text-gray-600 mt-1">Herramientas para crear</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🧩</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Puzzle 3D</h3>
              <p class="text-xs text-gray-600 mt-1">Rompecabezas dimensional</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🎭</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Máscara Personalizada</h3>
              <p class="text-xs text-gray-600 mt-1">Tu diseño único</p>
            </div>
          </div>
          <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40">
            <div class="placeholder-img h-32 text-purple-300" aria-hidden="true">🎵</div>
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 text-sm">Instrumento Mini</h3>
              <p class="text-xs text-gray-600 mt-1">Música en miniatura</p>
            </div>
          </div>
          <!-- Más duplicados si hace falta -->
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

    // Elevación en hover (mejor rendimiento con clases)
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
      });
    });
  </script>
</body>
</html>
