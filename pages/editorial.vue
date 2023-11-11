<template></template>

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

console.log(
  'editorialMembersData: ',
  editorialMembersData.value.editorialMembers,
);
</script>
