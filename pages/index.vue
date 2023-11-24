<template>
  <div>
    <SliderHome v-if="postsData.posts" :posts="postsData?.posts.data" />

    <SectionCategories
      v-if="categoriesData.categories"
      :categories="categoriesData?.categories"
    ></SectionCategories>
    <BannersMainBanner />

    <!-- <SectionSocialMedia /> -->
    <SectionHomeBlogEntries
      v-if="postsData.posts"
      :posts="postsData?.posts.data"
    />
    <SectionBackground />
    <SliderQuotes />
  </div>
</template>

<script setup lang="ts">
import GET_POST_QUERY from '@/graphql/Queries/posts/getPosts.query.graphql';
import GET_CATEGORIES_QUERY from '@/graphql/Queries/categories/getCategories.query.graphql';
import { Post } from '@/ts/types/post.types';
import { Category } from '@/ts/types/category.types';

const [
  { data: postsData, error: postsError },
  { data: categoriesData, error: categoriesError },
] = await Promise.all([
  useAsyncQuery<{ posts?: { data: Post[] } }>(GET_POST_QUERY),
  useAsyncQuery<{ categories?: Category[] }>(GET_CATEGORIES_QUERY),
]);

console.log(categoriesData);

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
