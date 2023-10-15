<template>
  <NuxtLink to="https://nuxtjs.org">
    <div
      class="md:h-[450px] aspect-square md:aspect-auto overflow-hidden group"
    >
      <div class="relative h-full p-6">
        <NuxtImg
          :src="item.featured_image.original_url"
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
                {{ item.author.name }}
              </p></span
            ><span
              ><p class="text-white font-roboto text-xs">
                {{ item.publish_at }}
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
import { Post } from '../../ts/types/post.types';

const { item } = defineProps({
  item: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>
