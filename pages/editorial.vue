<template>
  <div class="bg-black">
    <BannersCategoryBanner
      name="Editorial"
      :backgroundImage="pageData.page?.background_image?.original_url"
      :blur="
        pageData.page?.background_image?.responsive_images
          .media_library_original?.base64svg
      "
    />

    <div
      class="max-w-5xl px-6 pt-20 md:pt-10 m-auto pb-40 md:flex-row bg-black text-white items-stretch"
    >
      <div class="pt-24 hidden sm:block pb-20">
        <h1
          class="lg:text-[80px] text-5xl text-white font-avenir font-bold md:pb-4 pb-8"
        >
          Editorial
        </h1>

        <div class="w-1/5 -mt-4">
          <div class="divider before:bg-white before:h-2 after:h-0"></div>
        </div>
      </div>

      <div class="md:pb-6 pb-8">
        <h2 class="text-white font-avenir font-bold text-4xl">Coordinación</h2>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div
            v-for="(member, index) in editorialMembersData.editorialMembers"
            :key="index"
          >
            <SectionMember :member="member" />
          </div>
        </div>
      </div>
    </div></div
></template>

<script lang="ts" setup>
import PAGE_QUERY from '@/graphql/Queries/pages/getPage.query.graphql';
import EDITORIAL_MEMBERS_QUERY from '@/graphql/Queries/editorialMembers/getEditorialMembers.query.graphql';
import type { EditorialMember } from '~/ts/types/editorialMember.types';
import type { Page } from '~/ts/types/page.types';

const [
  { data: pageData, error },
  { data: editorialMembersData, error: otherPostsError },
] = await Promise.all([
  useAsyncQuery<{ page?: Page }>(PAGE_QUERY, {
    slug: 'editorial',
  }),
  useAsyncQuery<{ editorialMembers: EditorialMember[] }>(
    EDITORIAL_MEMBERS_QUERY,
  ), // Execute other query
]);

useHead({
  title: 'Editorial - Revista Phantasma',
  meta: [
    {
      content:
        'Editorial de Revista Phantasma, espacio creativo y crítico. Colabora con Phantasma',
    },
  ],
});
</script>
