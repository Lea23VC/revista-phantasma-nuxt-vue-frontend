<template>
  <NuxtLink :to="'/post/' + item.slug">
    <div class="item-height aspect-square md:aspect-auto overflow-hidden group">
      <div class="relative h-full p-6">
        <NuxtImg
          :src="item.featured_image.preview_url"
          alt="Imagen post"
          :class="
            'absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition duration-500 cursor-pointer object-' +
            item.featured_image.positions.preview
          "
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-40"
        ></div>
        <div class="relative grid content-between h-full font-avenir">
          <div>
            <span
              ><p class="text-white text-xs">
                {{ item?.author?.name }}
              </p></span
            ><span
              ><p class="text-white text-xs">
                {{ item.publish_at }}
              </p></span
            >
          </div>
          <div>
            <h3 class="text-2xl text-white">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '../../ts/types/post.types';

const { item, height } = defineProps({
  item: {
    type: Object as PropType<Post>,
    required: true,
  },
  height: {
    type: String,
    default: '450px',
  },
});
</script>

<style scoped>
.item-height {
  @media screen and (min-width: 768px) {
    height: v-bind(height);
  }
  @media screen and (max-width: 768px) {
    height: 350px;
  }
}
</style>
