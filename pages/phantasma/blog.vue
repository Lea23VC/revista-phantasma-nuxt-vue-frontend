<template>
  <div class="bg-black">
    <div>
      <BannersSinglePostBanner
        :title="'BLOG'"
        :backgroundImage="backgroundImage"
      />
    </div>
    <div class="max-w-5xl px-6 m-auto pb-20">
      <BlogGrid :posts="posts" :height="'250px'" />
      <div class="flex justify-center">
        <UPagination
          v-if="pagination"
          :total="pagination?.total"
          :model-value="pagination?.currentPage"
          size="lg"
          :activeButton="{ color: 'black' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post, PostPaginator } from '@/ts/types/post.types';
import GET_POSTS_QUERY from '@/graphql/Queries/posts/getPosts.query.graphql';

const route = useRoute();
const slug = route.params.slug as string;

const variables = {
  slug: slug,
};
const { data, error } = await useAsyncQuery<{ posts?: PostPaginator }>(
  GET_POSTS_QUERY,
  variables,
);
const posts = data?.value.posts?.data;
const pagination = data.value.posts?.paginatorInfo;

console.log('pagination', pagination);

const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg/v1/fill/w_794,h_447,al_c,q_80,enc_auto/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg',
);
</script>
<style scoped>
.bg-brown-transparent {
  background-color: rgba(97, 63, 40, 0.3); /* Brown color with 50% opacity */
}
</style>
