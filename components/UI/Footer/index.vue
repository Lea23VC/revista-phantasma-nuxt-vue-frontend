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
        ><NuxtLink class="text-sm" to="/phantasma/poesia">Poesía</NuxtLink
        ><NuxtLink class="text-sm" to="/phantasma/convocatorias"
          >Convocatorias</NuxtLink
        ><NuxtLink class="text-sm" to="/phantasma/numeros-especiales"
          >Números especiales</NuxtLink
        ><NuxtLink class="text-sm" to="/phantasma/artesvisuales"
          >Artes Visuales</NuxtLink
        ><NuxtLink class="text-sm" to="/phantasma/critica">Crítica</NuxtLink
        ><NuxtLink class="text-sm" to="/phantasma/narrativa"
          >Narrativa</NuxtLink
        >
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Recursos</span
        ><NuxtLink class="text-sm" to="/phantasma/blog">Blog</NuxtLink>
        <NuxtLink class="text-sm" to="/editorial">Editorial</NuxtLink>
        <NuxtLink class="text-sm" to="/contacto">Contacto</NuxtLink>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Link de interes</span
        ><a class="text-sm" href="#">Términos de uso</a
        ><a class="text-sm" href="#">Privacidad</a>
      </div>
    </div>
    <div
      class="mt-8 border-t border-gray-700 pt-4 md:flex md:justify-between text-center md:text-left"
    >
      <p class="text-xs text-gray-400">
        © 2024 Revista Phantasma. Todos los derechos reservados.
      </p>
    </div>
  </footer></template
>
