<template>
  <div>
    <BannersSinglePostBanner
      :backgroundImage="data?.post?.featured_image.original_url"
    />
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import GET_POST_QUERY from '../../graphql/Queries/getPost.query.graphql';
import { Post } from '../../ts/types/post.types';

// @ts-ignore
const route = useRoute();

const variables = {
  slug: route.params.slug as string,
};
const { data, error } = await useAsyncQuery<{ post?: Post }>(
  GET_POST_QUERY,
  variables,
);

console.log(data, error);
</script>
