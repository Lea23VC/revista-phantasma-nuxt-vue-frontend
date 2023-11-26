<template>
  <div class="bg-black">
    <div>
      <BannersSinglePostBanner
        :title="bannerTitle"
        :backgroundImage="backgroundImage"
      />
    </div>
    <div class="max-w-5xl px-6 m-auto pb-20">
      <div v-if="queryTitle" class="pt-10">
        <h2 class="md:text-4xl text-xl text-white font-avenir font-bold pb-4">
          {{ queryTitle }}: {{ queryLabel }}
        </h2>
      </div>

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
const { title, variables, isAuthor } = defineProps({
  title: {
    type: String,
    default: 'BLOG',
  },
  variables: {
    type: Object,
    default: {},
  },
  isAuthor: {
    type: Boolean,
    default: false,
  },
  queryTitle: {
    type: String,
  },
});

import { PostPaginator } from '@/ts/types/post.types';
import GET_POSTS_QUERY from '@/graphql/Queries/posts/getPosts.query.graphql';

const { data, error } = await useAsyncQuery<{ posts?: PostPaginator }>(
  GET_POSTS_QUERY,
  variables,
);

const posts = data?.value.posts?.data;
const pagination = data.value.posts?.paginatorInfo;

const bannerTitle = computed(() => {
  return 'BLOG';
});

const queryLabel = computed(() => {
  if (isAuthor && posts?.length && posts.length > 0) {
    return posts[0]?.author?.name;
  }
});

const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg/v1/fill/w_794,h_447,al_c,q_80,enc_auto/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg',
);
</script>
<style scoped>
.bg-brown-transparent {
  background-color: rgba(97, 63, 40, 0.3); /* Brown color with 50% opacity */
}
</style>
