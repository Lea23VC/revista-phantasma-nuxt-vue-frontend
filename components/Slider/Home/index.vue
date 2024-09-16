<template>
  <div class="lg:mt-16">
    <Swiper
      :height="800"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <SliderSlide
          :name="slide.name"
          :backgroundImage="slide.backgroundImage"
          :position="slide.position"
          :blur="slide.blur"
        >
          <!-- Slide content -->

          <h3
            class="text-white font-roboto font-bold text-center text-sm sm:text-base py-2"
            v-motion
            :initial="{ opacity: 0 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="1200"
          >
            <div v-if="slide.categories" class="flex justify-center">
              <div v-for="(category, index) in slide.categories">
                <NuxtLink :to="'/phantasma/' + category.slug">{{
                  category.name
                }}</NuxtLink>
                {{ index < slide.categories.length - 1 ? ' - ' : '' }}
              </div>
            </div>
            <div v-else>{{ slide.subtitle }}</div>
          </h3>

          <h2
            v-html="slide.title"
            v-motion
            :initial="{ opacity: 0 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="1200"
            class="text-white max-w-2xl font-roboto font-bold text-center sm:text-5xl text-2xl pb-4 sm:pb-8"
          ></h2>

          <div class="text-center py-4 sm:py-0 !z-[999] relative">
            <NuxtLink :to="slide.url">
              <button
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="1200"
                class="btn btn-outline font-roboto font-thin border-white text-white"
              >
                {{ slide.buttonMessage }}
              </button></NuxtLink
            >
          </div>
        </SliderSlide></SwiperSlide
      >

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/ts/types/post.types';

const { posts } = defineProps({
  posts: {
    type: Object as PropType<Post[]>,
    required: true,
  },
});

function getPosition(index: number) {
  switch (true) {
    case index % 2 === 0:
      return 'center';
    case index % 2 != 0:
      return 'top right';
    default:
      return 'center';
  }
}

const slides = posts.map((post, index) => ({
  name: post.title,
  backgroundImage: post.featured_image.original_url,
  position: getPosition(index),
  categories: post.categories,
  subtitle: 'test',
  title: post.title,
  buttonMessage: 'Leer más',
  url: `/post/${post.slug}`,
  blur: post.featured_image.responsive_images.media_library_original?.base64svg,
}));

// const slides = reactive([
//   {
//     name: 'slide1',
//     backgroundImage:
//       'https://static.wixstatic.com/media/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg/v1/fill/w_800,h_244,al_c,q_80,enc_auto/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg',
//     position: 'center',
//     subtitle: 'PLATAFORMA CRÍTICA',
//     title: 'MÁQUINA<br/>KIRLIAN',
//     buttonMessage: 'Leer más',
//     url: '/phantasma/maquina-kirlian',
//   },
//   {
//     name: 'slide2',
//     backgroundImage:
//       'https://static.wixstatic.com/media/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg/v1/fill/w_1613,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg',
//     position: 'top right',
//     title: 'PAISAJES DE LA<br/>INFANCIA',
//     subtitle: '1° REVISTA / DOSSIER PHANTASMA',
//     buttonMessage: 'Descárgalo aquí',
//     url: '/post/n1-phantasma-paisajes-de-la-infancia',
//   },
// ]);
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
