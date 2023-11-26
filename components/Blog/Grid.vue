<template>
  <div class="max-w-5xl m-auto relative z-10">
    <div class="bg-black rounded-sm py-8">
      <div :class="`grid grid-cols-1 md:grid-cols-${grid} gap-10`" v-if="posts">
        <BlogItem
          v-for="(item, index) in posts"
          :key="index"
          :item="item"
          :height="height"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Post } from '@/ts/types/post.types';

const { posts, grid } = defineProps({
  posts: {
    type: Object as PropType<Post[]>,
  },
  grid: {
    type: Number,
    default: 3,
  },
  height: {
    type: String,
    default: '350px',
  },
});
</script>
