<template>
  <div
    class="relative bg-cover bg-center"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
    }"
  >
    <div class="absolute inset-0 top-[50%] bg-black h-[50%]"></div>

    <div class="max-w-5xl m-auto py-20 px-6 relative z-10">
      <div class="bg-black rounded-sm p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <BlogItem v-for="(item, index) in items" :key="index" :item="item" />
        </div>

        <div class="text-center pt-16">
          <button
            class="btn btn-outline font-roboto font-thin border-white text-white"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import GET_POST_QUERY from '../../graphql/Queries/getPosts.query.graphql';
import { Post } from '../../ts/types/post.types';

const { data } = await useAsyncQuery<{ posts: { data: Post[] } }>(
  GET_POST_QUERY,
);

const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_fdd9b4f4c3da4139a20e3bc9587b0b55~mv2.jpg',
);
const items = reactive(data.value.posts.data);

console.log('items: ', items);
</script>
