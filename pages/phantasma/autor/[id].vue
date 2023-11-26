<template>
  <BlogPageTemplate
    :variables="variables"
    :query-title="'Autor'"
    :is-author="true"
  ></BlogPageTemplate>
</template>

<script setup lang="ts">
import getWhereHasCondition from '~/utils/queries/authorCondition';

const route = useRoute();

const id = route.params.id as string;

const variables = {
  hasAuthor: getWhereHasCondition(id, 'ID', 'EQ'),
};
</script>
<style></style>
