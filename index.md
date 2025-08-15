<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Layer Up - Catálogo 3D</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    * { font-family: 'Poppins', sans-serif; }
    .category-card, .product-card { transition: transform .3s ease, box-shadow .3s ease; }
    .category-card:hover { transform: translateY(-4px); }
    .product-card:hover { transform: scale(1.02); }
    .gradient-bg { background: linear-gradient(135deg, #ffeef8 0%, #f0f4ff 50%, #fff2e6 100%); }
    .whatsapp-float { position: fixed; bottom: 20px; right: 20px; z-index: 1000; animation: pulse 2s infinite; }
    @keyframes pulse { 0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)} }
    .placeholder-img { background: #f3f4f6; display:flex; align-items:center; justify-content:center; font-size:2rem; }
    .scroll-container { overflow-x:auto; scrollbar-width:none; -ms-overflow-style:none; }
    .scroll-container::-webkit-scrollbar { display:none; }
  </style>
</head>
<body class="gradient-bg min-h-screen">
  <header class="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 text-center">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Layer Up</h1>
      <p class="text-sm text-gray-600 font-medium">Impresión 3D Personalizada</p>
    </div>
  </header>

  <section class="py-4 text-center">
    <h2 class="text-xl font-bold text-gray-800">Crea, Personaliza, <span class="text-purple-500">Imprime</span></h2>
    <p class="text-sm text-gray-600 mb-4">Descubre nuestro catálogo de productos únicos impresos en 3D</p>
  </section>

  <!-- Categorías -->
  <nav class=\"py-4\" role=\"navigation\" aria-label=\"Categorías\">
    <div class=\"container mx-auto px-4\">
      <div class=\"grid grid-cols-2 gap-3\">
        <button type=\"button\" onclick=\"scrollToCategory('llaveros')\" class=\"category-card bg-pink-100 hover:bg-pink-200 p-3 rounded-xl text-center shadow-lg\">
          <div class=\"text-2xl mb-1\">🔑</div><span class=\"font-semibold text-pink-800 text-xs\">Llaveros</span>
        </button>
        <button type=\"button\" onclick=\"scrollToCategory('clickers')\" class=\"category-card bg-blue-100 hover:bg-blue-200 p-3 rounded-xl text-center shadow-lg\">
          <div class=\"text-2xl mb-1\">🎮</div><span class=\"font-semibold text-blue-800 text-xs\">Clickers</span>
        </button>
        <button type=\"button\" onclick=\"scrollToCategory('figuras')\" class=\"category-card bg-green-100 hover:bg-green-200 p-3 rounded-xl text-center shadow-lg\">
          <div class=\"text-2xl mb-1\">🎭</div><span class=\"font-semibold text-green-800 text-xs\">Figuras</span>
        </button>
        <button type=\"button\" onclick=\"scrollToCategory('sorpresas')\" class=\"category-card bg-purple-100 hover:bg-purple-200 p-3 rounded-xl text-center shadow-lg\">
          <div class=\"text-2xl mb-1\">🎁</div><span class=\"font-semibold text-purple-800 text-xs\">Sorpresas</span>
        </button>
        <button type=\"button\" onclick=\"scrollToCategory('otros')\" class=\"category-card bg-orange-100 hover:bg-orange-200 p-3 rounded-xl text-center shadow-lg col-span-2\">
          <div class=\"text-2xl mb-1\">✨</div><span class=\"font-semibold text-orange-800 text-xs\">Otros</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Llaveros -->
  <section id=\"llaveros\" class=\"py-4\">
    <div class=\"container mx-auto px-4\">
      <h2 class=\"text-lg font-bold text-center mb-4 text-pink-800\">🔑 Llaveros Únicos</h2>
      <div class=\"scroll-container\">
        <div class=\"infinite-scroll gap-3\">
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Llavero Boca\" data-images=\"fotos/llaveros/boca1.jpeg\">
            <img src=\"fotos/llaveros/boca1.jpeg\" alt=\"Llavero Boca\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Boca</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Escudo</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Llavero River\" data-images=\"fotos/llaveros/river1.jpeg\">
            <img src=\"fotos/llaveros/river1.jpeg\" alt=\"Llavero River\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">River</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Escudo</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Hello Kitty Azul\" data-images=\"fotos/llaveros/kittyazul1.jpeg\">
            <img src=\"fotos/llaveros/kittyazul1.jpeg\" alt=\"Hello Kitty Azul\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Hello Kitty Azul</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Multicolor</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Hello Kitty Roja\" data-images=\"fotos/llaveros/kittyroja1.jpeg\">
            <img src=\"fotos/llaveros/kittyroja1.jpeg\" alt=\"Hello Kitty Roja\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Hello Kitty Roja</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Multicolor</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Kuromi\" data-images=\"fotos/llaveros/kuromi1.jpeg\">
            <img src=\"fotos/llaveros/kuromi1.jpeg\" alt=\"Kuromi\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Kuromi</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Multicolor</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"My Melody\" data-images=\"fotos/llaveros/mymelody1.jpeg\">
            <img src=\"fotos/llaveros/mymelody1.jpeg\" alt=\"My Melody\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">My Melody</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Multicolor</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Pikachu\" data-images=\"fotos/llaveros/pikachu.jpeg\">
            <img src=\"fotos/llaveros/pikachu.jpeg\" alt=\"Pikachu\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Pikachu</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Plano multicolor</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Pokebola 3D\" data-images=\"fotos/llaveros/pokebola1.jpeg\">
            <img src=\"fotos/llaveros/pokebola1.jpeg\" alt=\"Pokebola 3D\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Pokebola 3D</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Tridimensional</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-32\" data-title=\"Sombrero HP\" data-images=\"fotos/llaveros/sombreroHP1.jpeg\">
            <img src=\"fotos/llaveros/sombreroHP1.jpeg\" alt=\"Sombrero HP\" class=\"h-24 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-2\">
              <h3 class=\"font-semibold text-gray-800 text-xs\">Sombrero HP</h3>
              <p class=\"text-xs text-gray-600 mt-1 leading-tight\">Hechicería 🎩</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Clickers -->
  <section id=\"clickers\" class=\"py-8 bg-white/50\">
    <div class=\"container mx-auto px-4\">
      <h2 class=\"text-2xl font-bold text-center mb-6 text-blue-800\">🎮 Clickers Antiestrés</h2>
      <div class=\"scroll-container\">
        <div class=\"infinite-scroll gap-4\">
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40\" data-title=\"Clicker Tulipanes\" data-images=\"fotos/clickers/tulipanes1.jpeg\">
            <img src=\"fotos/clickers/tulipanes1.jpeg\" alt=\"Clicker Tulipanes\" class=\"h-32 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-3\">
              <h3 class=\"font-semibold text-gray-800 text-sm\">Clicker Tulipanes</h3>
              <p class=\"text-xs text-gray-600 mt-1\">Diseño floral</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Figuras -->
  <section id=\"figuras\" class=\"py-8\">
    <div class=\"container mx-auto px-4\">
      <h2 class=\"text-2xl font-bold text-center mb-6 text-green-800\">🎭 Figuras Coleccionables</h2>
      <p class=\"text-center text-sm text-gray-500\">Próximamente…</p>
    </div>
  </section>

  <!-- Sorpresas -->
  <section id=\"sorpresas\" class=\"py-8 bg-white/50\">
    <div class=\"container mx-auto px-4\">
      <h2 class=\"text-2xl font-bold text-center mb-6 text-purple-800\">🎁 Sorpresas Especiales</h2>
      <div class=\"scroll-container\">
        <div class=\"infinite-scroll gap-4\">
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40\" data-title=\"Escarapelas (variante 2)\" data-images=\"fotos/sorpresas/escarapelas2.jpeg\">
            <img src=\"fotos/sorpresas/escarapelas2.jpeg\" alt=\"Escarapelas (variante 2)\" class=\"h-32 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-3\">
              <h3 class=\"font-semibold text-gray-800 text-sm\">Escarapelas</h3>
              <p class=\"text-xs text-gray-600 mt-1\">Bandera argentina</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40\" data-title=\"Huevos de Dragón\" data-images=\"fotos/sorpresas/huevos1.jpeg\">
            <img src=\"fotos/sorpresas/huevos1.jpeg\" alt=\"Huevos de Dragón\" class=\"h-32 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-3\">
              <h3 class=\"font-semibold text-gray-800 text-sm\">Huevos de Dragón</h3>
              <p class=\"text-xs text-gray-600 mt-1\">Monocromo con sorpresa</p>
            </div>
          </div>
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40\" data-title=\"Mario Box\" data-images=\"fotos/sorpresas/mariobox1.jpeg\">
            <img src=\"fotos/sorpresas/mariobox1.jpeg\" alt=\"Mario Box\" class=\"h-32 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-3\">
              <h3 class=\"font-semibold text-gray-800 text-sm\">Mario Box</h3>
              <p class=\"text-xs text-gray-600 mt-1\">Caja sorpresa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Otros -->
  <section id=\"otros\" class=\"py-8\">
    <div class=\"container mx-auto px-4\">
      <h2 class=\"text-2xl font-bold text-center mb-6 text-orange-800\">✨ Otros</h2>
      <div class=\"scroll-container\">
        <div class=\"infinite-scroll gap-4\">
          <div class=\"product-card bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-40\" data-title=\"Escarapelas (variante 1)\" data-images=\"fotos/otros/escarapelas1.jpeg\">
            <img src=\"fotos/otros/escarapelas1.jpeg\" alt=\"Escarapelas (variante 1)\" class=\"h-32 w-full object-cover\" loading=\"lazy\">
            <div class=\"p-3\">
              <h3 class=\"font-semibold text-gray-800 text-sm\">Escarapelas (var. 1)</h3>
              <p class=\"text-xs text-gray-600 mt-1\">Tradicional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-800 text-white py-6 text-center">
    <h3 class="text-lg font-bold mb-2">Layer Up</h3>
    <p class="text-xs text-gray-300">Transformamos tus ideas en realidad con impresión 3D</p>
  </footer>

  <a href="https://wa.me/5491140928282" class="whatsapp-float bg-green-500 text-white p-3 rounded-full shadow-xl">💬</a>

  <script>
    function scrollToCategory(id) {
      document.getElementById(id).scrollIntoView({behavior:'smooth'});
    }
  </script>
</body>
</html>
