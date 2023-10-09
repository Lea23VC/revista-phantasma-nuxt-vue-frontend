<template>
  <UIHomeHeaderDesktop class="hidden lg:flex" :title="title" :links="links" />

  <UIHomeHeaderMobile class="flex lg:hidden" :title="title" :links="links" />
</template>

<script setup lang="ts">
const title = ref('Revista Phantasma');
const links = reactive([
  { name: 'Apariciones', href: '/' },
  { name: 'Visiones', href: '/about' },
  { name: 'Espectos', href: '/contact' },
  {
    name: 'Parapsicología',
    href: '/blog',
  },
  {
    name: 'Psicofonías',
    href: '/blog',
  },
  {
    name: 'Máquina Kirlian',
    href: '/blog',
  },
  {
    name: 'Más',
    children: [
      { name: 'Convocatorias', href: '/login' },
      { name: 'Formas y figuras', href: '/register' },
      {
        name: 'Números especiales',
      },
      {
        name: 'Editorial',
      },
    ],
  },
]);
</script>
