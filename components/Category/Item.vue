<template>
  <NuxtLink :to="'/phantasma/' + item.slug">
    <div class="h-[150px] overflow-hidden group">
      <div class="relative h-full p-6">
        <NuxtImg
          :src="item.background.preview_url"
          alt="Left Image"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition duration-500 cursor-pointer"
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-40 group-hover:opacity-0 transition duration-500"
        ></div>
        <div class="relative h-full w-full flex justify-center items-center">
          <div class="p-2 bg-black">
            <h3 class="text-lg text-center text-white">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from '@/ts/types/category.types';

const { item } = defineProps({
  item: {
    type: Object as PropType<Category>,
    required: true,
  },
});
</script>
