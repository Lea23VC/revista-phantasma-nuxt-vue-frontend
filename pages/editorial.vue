<template>
  <div class="bg-black">
    <BannersCategoryBanner
      :backgroundImage="pageData.page?.background_image?.original_url"
      :blur="
        pageData.page?.background_image?.responsive_images
          .media_library_original?.base64svg
      "
    />

    <div class="max-w-5xl px-6 m-auto pb-40">
      <div class="pt-24 hidden sm:block pb-20">
        <h1
          class="lg:text-[80px] text-5xl text-white font-avenir font-bold pb-4"
        >
          Editorial
        </h1>

        <div class="w-1/5 -mt-4">
          <div class="divider before:bg-white before:h-2 after:h-0"></div>
        </div>
      </div>

      <div class="pb-6">
        <h2 class="text-white font-avenir font-bold text-4xl">Coordinación</h2>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-16">
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
import { EditorialMember } from '~/ts/types/editorialMember.types';
import { Page } from '~/ts/types/page.types';

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
