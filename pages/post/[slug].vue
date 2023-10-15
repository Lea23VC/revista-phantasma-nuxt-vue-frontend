<template>
  <div class="">
    <BannersSinglePostBanner
      :backgroundImage="post?.featured_image.original_url"
    />
  </div>
  <div class="bg-black">
    <div class="max-w-5xl m-auto py-10 lg:py-20 px-6">
      <div class="max-w-[980px] m-auto">
        <div class="bg-white p-4">
          <article class="border border-phantasma-gray">
            <div class="p-4 lg:p-16">
              <div>
                <div
                  class="flex flex-col sm:flex-row items-start sm:items-center font-avenir text-gray-500"
                >
                  <p>{{ post?.author.name }}</p>
                  <i class="mx-2 text-gray-400 hidden sm:block"
                    ><SVGIconCircle class="w-1"
                  /></i>
                  <p>{{ date }}</p>
                </div>

                <div class="pt-10 pb-10">
                  <h1 class="text-black font-avenir lg:text-4xl font-bold">
                    {{ post?.title }}
                  </h1>
                </div>

                <div>
                  <BlogContent :content="post?.content" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import GET_POST_QUERY from '../../graphql/Queries/getPost.query.graphql';
import { Post } from '../../ts/types/post.types';
import { transformDate } from '../../utils/transformation/transformDate';
// @ts-ignore
const route = useRoute();

const variables = {
  slug: route.params.slug as string,
};
const { data, error } = await useAsyncQuery<{ post?: Post }>(
  GET_POST_QUERY,
  variables,
);

const post = data?.value?.post;

let date: Ref<string> = ref('');

if (post?.publish_at) {
  date = ref(transformDate(post.publish_at));
}
</script>
