<template>
  <div
    :style="{
      backgroundImage: `url(${backgroundImage})`,
    }"
    class="bg-cover"
  >
    <div class="max-w-5xl m-auto py-20">
      <div class="bg-black rounded-sm p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <BlogItem v-for="(item, index) in items" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BlogItemType } from '~/ts/types/BlogItem.types';
const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_fdd9b4f4c3da4139a20e3bc9587b0b55~mv2.jpg',
);
const items = reactive<BlogItemType[]>([
  {
    id: 1,
    title: 'Su cama',
    author: 'Federica Ruberto',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_b2e002d40cac40a6a4cc78cfb0fb5a95~mv2.jpg',
  },
  {
    id: 2,
    title: 'Cambio de luz',
    author: 'Marinés Scelta',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_68934b8792c2440ba58ac062065fe6de~mv2.jpg',
  },
  {
    id: 3,
    title: 'Cambio de luz',
    author: 'Marinés Scelta',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_68934b8792c2440ba58ac062065fe6de~mv2.jpg',
  },
  {
    id: 4,
    title: 'Cambio de luz',
    author: 'Marinés Scelta',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_68934b8792c2440ba58ac062065fe6de~mv2.jpg',
  },

  {
    id: 5,
    title: 'Cambio de luz',
    author: 'Marinés Scelta',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_68934b8792c2440ba58ac062065fe6de~mv2.jpg',
  },

  {
    id: 6,
    title: 'Cambio de luz',
    author: 'Marinés Scelta',
    date: 'hace 3 horas',
    featuredImage:
      'https://static.wixstatic.com/media/11062b_68934b8792c2440ba58ac062065fe6de~mv2.jpg',
  },
]);
</script>
