<template>
  <div class="">
    <BannersSinglePostBanner
      :backgroundImage="post?.featured_image.original_url"
    />
  </div>
  <div class="bg-black">
    <div class="max-w-5xl m-auto py-10 lg:py-20 px-6">
      <div class="max-w-[980px] m-auto">
        <div class="bg-white p-4 px-6">
          <article class="border border-phantasma-gray">
            <div class="p-4 lg:p-16">
              <div>
                <PostAuthorData
                  v-if="post"
                  :authorName="post?.author.name"
                  :date="post?.publish_at"
                />

                <div class="pt-10 pb-10">
                  <h1 class="text-black font-avenir lg:text-4xl font-bold">
                    {{ post?.title }}
                  </h1>
                </div>

                <div>
                  <PostContent :content="post?.content" />
                </div>

                <div class="pt-10 pb-5">
                  <div class="divider"></div>
                </div>

                <div>
                  <SocialSharingLink url="google.cl" />
                </div>
              </div>
            </div>
          </article>

          <div>
            <div class="pt-10 pb-10">
              <h2 class="text-black font-avenir lg:text-2xl font-bold pb-5">
                Más entradas
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(post, index) in posts" :key="index">
                  <BlogItem :item="post" height="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import GET_POST_QUERY from '../../graphql/Queries/getPost.query.graphql';
import GET_POSTS_QUERY from '../../graphql/Queries/getPosts.query.graphql';

import { Post } from '../../ts/types/post.types';
import { transformDate } from '../../utils/transformation/transformDate';
// @ts-ignore
const route = useRoute();

const slug = route.params.slug as string;

const variables = {
  slug: slug,
};

const [
  { data, error },
  { data: otherPostsData, error: otherPostsError },
] = await Promise.all([
  useAsyncQuery<{ post?: Post }>(GET_POST_QUERY, variables),
  useAsyncQuery<{ posts?: { data: Post[] } }>(GET_POSTS_QUERY, {
    slug: [slug],
    first: 3,
  }), // Execute other query
]);

const post = data?.value?.post;
const posts = otherPostsData?.value?.posts?.data;
</script>
