<template>
  <BlogPageTemplate
    :query-title="query ? 'Busqueda: ' + query : ''"
    :variables="variables"
  ></BlogPageTemplate>
</template>

<script setup lang="ts">
import { registerLog } from '~/utils/log/registerLog';
import { shouldLogIpBySearchQuery } from '~/utils/log/shoudLogIp';
import { getPostsWhereSearchConditions } from '~/utils/queries/getWhereCondition';

const route = useRoute();
const page = route.params.page as string;
const config = useRuntimeConfig();

const query = ref(route.query.q as string);

const variables = reactive(
  query.value
    ? {
        where: getPostsWhereSearchConditions(query.value),
        page: page ? parseInt(page) : 1,
      }
    : {
        page: page ? parseInt(page) : 1,
      },
);

async function logIp(searchQuery: string) {
  const visitedUrl = window.location.href; // Get the full URL of the post

  // Check if the post contains the required names
  if (shouldLogIpBySearchQuery(searchQuery, config)) {
    try {
      // Send the request without blocking SSR
      await registerLog(visitedUrl, config);
      console.log('IP log saved');
    } catch (error) {
      console.error('Error saving IP log:', error);
    }
  } else {
    console.log(
      'No matching names found in author or content. IP log not saved.',
    );
  }
}

// Function to update the page title
const updateTitle = (searchQuery: string) => {
  useHead({
    title: searchQuery
      ? `Busqueda: ${searchQuery} | Revista Phantasma`
      : 'Blog | Revista Phantasma',
  });

  logIp(searchQuery);
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
