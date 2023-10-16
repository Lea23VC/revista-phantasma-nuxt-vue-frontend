<template>
  <div class="bg-black">
    <div>
      <BannersCategoryBanner
        :backgroundImage="category?.background.original_url"
      />
    </div>
    <div class="max-w-5xl m-auto pb-40">
      <div class="pt-24">
        <h1 class="text-[80px] text-white font-avenir font-bold">
          {{ category?.name }}
        </h1>

        <div class="w-1/5 pb-16 -mt-4">
          <div class="divider before:bg-white before:h-2 after:h-0"></div>
        </div>
      </div>

      <BlogGrid :posts="category?.posts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GET_CATEGORY_QUERY from '@/graphql/Queries/categories/getCategory.query.graphql';
import { Category } from '@/ts/types/category.types';

const route = useRoute();
const slug = route.params.slug as string;

const variables = {
  slug: slug,
};
const { data, error } = await useAsyncQuery<{ category?: Category }>(
  GET_CATEGORY_QUERY,
  variables,
);
const category = data?.value.category;
</script>
<style scoped>
.bg-brown-transparent {
  background-color: rgba(97, 63, 40, 0.3); /* Brown color with 50% opacity */
}
</style>
