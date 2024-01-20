<template>
  <div class="bg-black">
    <div>
      <BannersCategoryBanner
        :name="category?.name"
        :backgroundImage="category?.background.original_url"
        :blur="
          category?.background.responsive_images.media_library_original
            ?.base64svg
        "
      />
    </div>
    <div
      class="max-w-5xl px-6 pt-20 md:pt-10 m-auto pb-40 md:flex-row bg-black text-white items-stretch"
    >
      <div class="pt-24 hidden sm:block">
        <h1
          class="lg:text-[75px] text-5xl text-white font-avenir font-bold pb-4 pt-6"
        >
          {{ category?.name }}
        </h1>

        <div class="w-1/5 -mt-4">
          <div class="divider before:bg-white before:h-2 after:h-0"></div>
        </div>
      </div>

      <div class="md:py-20 py-0">
        <BlogGrid :posts="category?.posts" />
      </div>
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

useHead({
  title: category?.name,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Entradas de la categoría ' + category?.name,
    },

    {
      content: 'Entradas de la categoría ' + category?.name,
      name: category?.name + ' | Revista Phantasma',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: category?.background.preview_url,
    },
  ],
});
</script>
<style scoped>
.bg-brown-transparent {
  background-color: rgba(97, 63, 40, 0.3); /* Brown color with 50% opacity */
}
</style>
