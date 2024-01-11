<template>
  <BlogPageTemplate
    :query-title="query ? 'Busqueda: ' + query : ''"
    :variables="variables"
  ></BlogPageTemplate>
</template>

<script setup lang="ts">
import { getPostsWhereSearchConditions } from '~/utils/queries/getWhereCondition';

const route = useRoute();

const query = ref(route.query.q as string);

const variables = reactive(
  query.value
    ? {
        where: getPostsWhereSearchConditions(query.value),
        first: 9,
      }
    : {
        first: 9,
      },
);

// Function to update the page title
const updateTitle = (searchQuery: string) => {
  useHead({
    title: searchQuery
      ? `Busqueda: ${searchQuery} | Revista Phantasma`
      : 'Blog | Revista Phantasma',
  });
};

updateTitle(query.value);

watch(
  () => route.query.q,
  (value) => {
    variables.where = getPostsWhereSearchConditions(value as string);
    query.value = value as string;
    updateTitle(query.value);
  },
);
</script>
<style></style>
