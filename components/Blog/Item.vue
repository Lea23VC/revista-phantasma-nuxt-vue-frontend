<template>
  <NuxtLink to="https://nuxtjs.org">
    <div
      class="md:h-[450px] aspect-square md:aspect-auto overflow-hidden group"
    >
      <div class="relative h-full p-6">
        <img
          :src="item.featuredImage"
          alt="Left Image"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition duration-500 cursor-pointer"
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-40"
        ></div>
        <div class="relative grid content-between h-full">
          <div>
            <span
              ><p class="text-white font-roboto text-xs">
                {{ item.author }}
              </p></span
            ><span
              ><p class="text-white font-roboto text-xs">
                {{ item.date }}
              </p></span
            >
          </div>
          <div>
            <h3 class="font-roboto text-2xl text-white">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { BlogItemType } from '../../ts/types/BlogItem.types';

const { item } = defineProps({
  item: {
    type: Object as PropType<BlogItemType>,
    required: true,
  },
});
</script>
