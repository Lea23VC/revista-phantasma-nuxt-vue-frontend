<template>
  <div class="">
    <BannersSinglePostBanner
      :backgroundImage="post?.featured_image.original_url"
      :blur="
        post?.featured_image.responsive_images.media_library_original?.base64svg
      "
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
                  :authorName="post?.author?.name"
                  :date="post?.publish_at"
                  :id="post?.author?.id"
                />

                <div class="pt-10 pb-10">
                  <h1 class="text-black font-avenir lg:text-4xl font-bold">
                    {{ post?.title }}
                  </h1>
                </div>

                <div
                  v-for="(attachment, index) in post?.attachments"
                  class="pb-8"
                >
                  <div class="pb-8" v-html="attachment.description"></div>
                  <div v-for="(file, index) in attachment.files" :key="index">
                    <div
                      :key="index"
                      class="mb-4 flex items-center justify-between bg-white p-8 pl-10 border rounded-lg"
                    >
                      <div class="max-w-[60%]">
                        <div class="pb-1">
                          <span class="text-gray-700 font-semibold">{{
                            file.name
                          }}</span>
                        </div>
                        <div>
                          <div class="flex gap-2">
                            <div>
                              Descargar {{ getFileExtension(file.file_name) }}
                            </div>
                            <div>•</div>
                            <div>{{ (file.size / 1048576).toFixed(2) }} MB</div>
                          </div>
                        </div>
                      </div>
                      <a :href="file.original_url" target="_blank" download>
                        <button
                          class="flex items-center px-3 py-2 transition-colors text-white hover:text-black bg-black hover:bg-white rounded-md font-medium hover:border-black hover:border"
                        >
                          Descargar
                          <svg
                            class="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg></button
                      ></a>
                    </div>
                  </div>
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
import GET_POST_QUERY from '../../graphql/Queries/posts/getPost.query.graphql';
import GET_POSTS_QUERY from '../../graphql/Queries/posts/getPosts.query.graphql';
import { getFileExtension } from '@/utils/transformation/getFileExtention';
import { Post } from '../../ts/types/post.types';
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

const title = post?.title + ' | Revista Phantasma';

useHead({
  title: title,
  meta: [
    {
      content: post?.content_without_html,
      name: title,
    },
    {
      content: post?.content_without_html,
      name: 'description',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: post?.featured_image.preview_url,
    },
    {
      content: 'https://phantasma.cl/post/' + post?.slug,
      name: 'og:url',
    },
    {
      content: 'article',
      name: 'og:type',
    },
    {
      content: post?.author?.name,
      name: 'author',
    },
    {
      content: post?.publish_at,
      name: 'article:published_time',
    },
    {
      content: post?.author?.name,
      name: 'article:author',
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: post?.content_without_html,
  ogDescription: post?.content_without_html,
  ogImage: post?.featured_image.preview_url,
  ogUrl: 'https://phantasma.cl/post/' + post?.slug,
  ogType: 'article',
  author: post?.author?.name,
  articlePublishedTime: post?.publish_at,
  // @ts-ignore
  articleAuthor: post?.author?.name,
});
</script>
