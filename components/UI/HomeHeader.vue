<template>
  <div class="navbar bg-black">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl font-libre-baskerville">
        {{ title }}
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 font-libre-baskerville">
        <li
          v-for="(link, index) in links"
          :key="link.name"
          :class="{ 'border-l border-gray-300': index !== 0 }"
        >
          <details v-if="link.children">
            <summary>
              {{ link.name }}
            </summary>
            <ul class="p-2 bg-base-100">
              <li v-for="child in link.children" :key="child.name">
                <a>{{ child.name }} </a>
              </li>
            </ul>
          </details>
          <a v-else>{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div></template
>

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
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
    ],
  },
]);
</script>
