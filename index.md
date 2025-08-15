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
    .smooth-scroll { scroll-behavior: smooth; }
    .category-card, .product-card { transition: transform .3s ease, box-shadow .3s ease; }
    .category-card:hover { transform: translateY(-4px); }
    .product-card:hover { transform: scale(1.02); }
    .gradient-bg { background: linear-gradient(135deg, #ffeef8 0%, #f0f4ff 50%, #fff2e6 100%); }
    .whatsapp-float { position: fixed; bottom: 20px; right: 20px; z-index: 1000; animation: pulse 2s infinite; }
    @keyframes pulse { 0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)} }
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

  <!-- Categorías -->
  <nav class="py-4">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 gap-3">
        <button onclick="scrollToCategory('llaveros')" class="category-card bg-pink-100 p-3 rounded-xl text-center shadow-lg">🔑 Llaveros</button>
        <button onclick="scrollToCategory('clickers')" class="category-card bg-blue-100 p-3 rounded-xl text-center shadow-lg">🎮 Clickers</button>
        <button onclick="scrollToCategory('figuras')" class="category-card bg-green-100 p-3 rounded-xl text-center shadow-lg">🎭 Figuras</button>
        <button onclick="scrollToCategory('sorpresas')" class="category-card bg-purple-100 p-3 rounded-xl text-center shadow-lg">🎁 Sorpresas</button>
        <button onclick="scrollToCategory('otros')" class="category-card bg-orange-100 p-3 rounded-xl text-center shadow-lg col-span-2">✨ Otros</button>
      </div>
    </div>
  </nav>

  <!-- Llaveros -->
  <section id="llaveros" class="py-4">
    <div class="container mx-auto px-4">
      <h2 class="text-lg font-bold text-center mb-4 text-pink-800">🔑 Llaveros</h2>
      <div class="flex gap-3 overflow-x-auto">
        <img src="fotos/llaveros/boca1.jpeg" alt="Boca" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/river1.jpeg" alt="River" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/kittyazul1.jpeg" alt="Hello Kitty Azul" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/kittyroja1.jpeg" alt="Hello Kitty Roja" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/kuromi1.jpeg" alt="Kuromi" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/mymelody1.jpeg" alt="My Melody" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/pikachu.jpeg" alt="Pikachu" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/pokebola1.jpeg" alt="Pokebola" class="product-card h-32 w-32 object-cover rounded-xl">
        <img src="fotos/llaveros/sombreroHP1.jpeg" alt="Sombrero HP" class="product-card h-32 w-32 object-cover rounded-xl">
      </div>
    </div>
  </section>

  <!-- Clickers -->
  <section id="clickers" class="py-8 bg-white/50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-800">🎮 Clickers</h2>
      <div class="flex gap-3 overflow-x-auto">
        <img src="fotos/clickers/tulipanes1.jpeg" alt="Clicker Tulipanes" class="product-card h-40 w-40 object-cover rounded-xl">
      </div>
    </div>
  </section>

  <!-- Figuras -->
  <section id="figuras" class="py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-green-800">🎭 Figuras</h2>
      <p class="text-center text-sm text-gray-500">Próximamente…</p>
    </div>
  </section>

  <!-- Sorpresas -->
  <section id="sorpresas" class="py-8 bg-white/50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-purple-800">🎁 Sorpresas</h2>
      <div class="flex gap-3 overflow-x-auto">
        <img src="fotos/sorpresas/escarapelas2.jpeg" alt="Escarapelas" class="product-card h-40 w-40 object-cover rounded-xl">
        <img src="fotos/sorpresas/huevos1.jpeg" alt="Huevos de Dragón" class="product-card h-40 w-40 object-cover rounded-xl">
        <img src="fotos/sorpresas/mariobox1.jpeg" alt="Mario Box" class="product-card h-40 w-40 object-cover rounded-xl">
      </div>
    </div>
  </section>

  <!-- Otros -->
  <section id="otros" class="py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-orange-800">✨ Otros</h2>
      <div class="flex gap-3 overflow-x-auto">
        <img src="fotos/otros/escarapelas1.jpeg" alt="Escarapelas Variante 1" class="product-card h-40 w-40 object-cover rounded-xl">
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
      <h3 class="text-lg font-bold mb-2">Layer Up</h3>
      <p class="text-gray-300 mb-3 text-xs">Transformamos tus ideas en realidad con impresión 3D de alta calidad</p>
    </div>
  </footer>

  <!-- WhatsApp Float Button -->
  <a href="https://wa.me/5491140928282" class="whatsapp-float bg-green-500 text-white p-3 rounded-full shadow-2xl" aria-label="WhatsApp">
    💬
  </a>

  <script>
    function scrollToCategory(id){
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    }
  </script>
</body>
</html>
