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
          {{ queryTitle }} {{ queryLabel }}
        </h2>
      </div>

      <div v-if="loading">
        <FeedbackSkeletonGrid :gridCols="9" />
      </div>

      <BlogGrid v-if="!loading" :posts="data.posts?.data" :height="'250px'" />

      <div v-if="!loading && data.posts?.data?.length == 0">
        No hay resultados
      </div>
      <div
        class="flex justify-center"
        v-if="data.posts && data.posts.paginatorInfo"
      >
        <UPagination
          v-if="data.posts.paginatorInfo"
          :total="data.posts.paginatorInfo?.total"
          :model-value="data.posts.paginatorInfo?.currentPage"
          size="lg"
          :activeButton="{ color: 'black' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostPaginator } from '@/ts/types/post.types';
import GET_POSTS_QUERY from '@/graphql/Queries/posts/getPosts.query.graphql';

const { variables, isAuthor, queryTitle } = defineProps({
  variables: {
    type: Object,
    required: true,
  },
  isAuthor: {
    type: Boolean,
    default: false,
  },
  queryTitle: {
    type: String,
  },
});

// Function to fetch posts
const { data, error, pending: loading, refresh } = await useAsyncQuery<{
  posts?: PostPaginator;
}>(GET_POSTS_QUERY, variables);

if (isAuthor && data.value.posts && data.value.posts.data.length > 0) {
  useHead({
    title: data.value.posts.data[0]?.author?.name + ' | Revista Phantasma',
  });

  useSeoMeta({
    title: data.value.posts.data[0]?.author?.name + ' | Revista Phantasma',
    ogTitle: data.value.posts.data[0]?.author?.name + ' | Revista Phantasma',
    description: 'Entradas de ' + data.value.posts.data[0]?.author?.name,
    ogDescription: 'Entradas de ' + data.value.posts.data[0]?.author?.name,
    author: data.value.posts.data[0]?.author?.name,
  });
}

// Watch for changes in variables
watch(
  variables,
  async () => {
    refresh();
  },
  { deep: true },
);

const bannerTitle = computed(() => 'BLOG');

const queryLabel = computed(() => {
  if (isAuthor && data.value.posts && data.value.posts.data.length > 0) {
    return data.value.posts.data[0]?.author?.name;
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
