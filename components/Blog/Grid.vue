<template>
  <div class="bg-black rounded-sm">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10" v-if="posts">
      <BlogItem v-for="(item, index) in posts" :key="index" :item="item" />
    </div>

    <sloth />
  </div>
</template>

<script lang="ts" setup>
import { Post } from '@/ts/types/post.types';

const { posts } = defineProps({
  posts: {
    type: Object as PropType<Post[]>,
  },
});
</script>
