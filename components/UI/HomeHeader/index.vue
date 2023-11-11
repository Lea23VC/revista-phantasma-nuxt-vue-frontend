<template>
  <UIHomeHeaderDesktop class="hidden lg:flex" :title="title" :links="links" />

  <UIHomeHeaderMobile class="flex lg:hidden" :title="title" :links="links" />
</template>

<script setup lang="ts">
const title = ref('Revista Phantasma');
const links = reactive([
  { name: 'Apariciones', href: '/phantasma/apariciones' },
  { name: 'Visiones', href: '/phantasma/visiones' },
  { name: 'Espectros', href: '/phantasma/espectros' },
  {
    name: 'Parapsicología',
    href: '/phantasma/parapsicologia',
  },
  {
    name: 'Psicofonías',
    href: '/phantasma/psicofonias',
  },
  {
    name: 'Máquina Kirlian',
    href: '/phantasma/maquina-kirlian',
  },
  {
    name: 'Más',
    children: [
      { name: 'Convocatorias', href: '/phantasma/convocatorias' },
      { name: 'Formas y figuras', href: '/phantasma/formas-y-figuras' },
      {
        name: 'Números especiales',
        href: '/phantasma/numeros-especiales',
      },
      {
        name: 'Editorial',
        href: '/editorial',
      },
    ],
  },
]);
</script>
