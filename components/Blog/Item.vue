<template>
  <NuxtLink :to="'/post/' + item.slug">
    <div class="item-height aspect-square md:aspect-auto overflow-hidden group">
      <div class="relative h-full p-6">
        <NuxtImg
          :src="item.featured_image.preview_url"
          alt="Imagen post"
          :class="dynamicClass"
          :style="style"
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

const dynamicClass = computed(() => {
  return {
    'item-height': true,
    absolute: true,
    'inset-0': true,
    'w-full': true,
    'h-full': true,
    'object-cover': true,
    'group-hover:scale-125': true,
    transition: true,
    'duration-500': true,
    'cursor-pointer': true,
  };
});

const style = computed(() => {
  return {
    'object-position': item.featured_image.positions.preview,
  };
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
