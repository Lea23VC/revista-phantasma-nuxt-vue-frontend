<template>
  <div>
    <SliderHome v-if="data.posts" :posts="data?.posts.data" />
    <BannersMainBanner />

    <!-- <SectionSocialMedia /> -->
    <SectionHomeBlogEntries v-if="data.posts" :posts="data?.posts.data" />
    <SectionBackground />
    <SliderQuotes />
  </div>
</template>

<script setup lang="ts">
import GET_POST_QUERY from '@/graphql/Queries/posts/getPosts.query.graphql';
import { Post } from '@/ts/types/post.types';

const { data, error } = await useAsyncQuery<{ posts?: { data: Post[] } }>(
  GET_POST_QUERY,
);

// useHead({
//   title: 'Revista Phantasma | Arte y Literatura',
//   meta: [
//     {
//       content:
//         'Revista de arte y literatura, espacio creativo y crítico. Colabora con Phantasma',
//       name: 'Revista Phantasma',
//     },
//   ],
// });
</script>
