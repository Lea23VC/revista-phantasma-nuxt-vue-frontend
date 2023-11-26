<template>
  <BlogPageTemplate
    :query-title="query ? 'Busqueda: ' + query : ''"
    :variables="query ? variables : {}"
  ></BlogPageTemplate>
</template>

<script setup lang="ts">
import { getPostsWhereSearchConditions } from '~/utils/queries/getWhereCondition';

const route = useRoute();

const query = ref(route.query.q as string);

const variables = reactive({
  where: getPostsWhereSearchConditions(query.value),
});

watch(
  () => route.query.q,
  (value) => {
    variables.where = getPostsWhereSearchConditions(value as string);
    query.value = value as string;
  },
);
</script>
<style></style>
