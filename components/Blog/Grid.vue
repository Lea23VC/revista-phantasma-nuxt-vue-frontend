<template>
  <div class="max-w-5xl m-auto py-20 px-6 relative z-10">
    <div class="bg-black rounded-sm p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10" v-if="posts">
        <BlogItem v-for="(item, index) in posts" :key="index" :item="item" />
      </div>

      <sloth />
    </div>
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
