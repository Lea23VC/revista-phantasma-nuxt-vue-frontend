<template>
  <footer class="bg-black text-white p-4 md:p-8">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col space-y-2">
        <span class="font-bold text-lg">Revista Phantasma</span>
        <p class="text-sm pb-4">🌙 Literatura / Crítica / Humanidades</p>
        <div class="flex space-x-4">
          <NuxtLink
            to="https://www.instagram.com/revista.phantasma/"
            target="_blank"
          >
            <SVGIconIG
          /></NuxtLink>

          <NuxtLink
            to="https://www.facebook.com/revistaphantasma"
            target="_blank"
          >
            <SVGIconFB
          /></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Categorías</span
        ><a class="text-sm" href="#">Poesía</a
        ><a class="text-sm" href="#">Convocatorias</a
        ><a class="text-sm" href="#">Números especiales</a
        ><a class="text-sm" href="#">Artes Visuales</a
        ><a class="text-sm" href="#">Crítica</a
        ><a class="text-sm" href="#">Narrativa</a>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Recursos</span
        ><a class="text-sm" href="#">Blog</a>
        <a class="text-sm" href="#">Editorial</a>
        <a class="text-sm" href="#">Contacto</a>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Link de interes</span
        ><a class="text-sm" href="#">Términos de uso</a
        ><a class="text-sm" href="#">Privacidad</a>
      </div>
    </div>
    <div class="mt-8 border-t border-gray-700 pt-4 md:flex md:justify-between">
      <p class="text-xs text-gray-400">
        © 2024 Revista Phantasma. Todos los derechos reservados.
      </p>
      <p class="text-xs text-gray-400 mt-4 md:mt-0">
        Lorem ipsum
      </p>
    </div>
  </footer></template
>
