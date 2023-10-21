<template>
  <Swiper
    :height="800"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperEffectFade]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
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
      >
        <!-- Slide content -->
        <h3 class="text-white font-roboto font-bold text-center text-lg py-2">
          {{ slide.subtitle }}
        </h3>
        <h2
          v-html="slide.title"
          class="text-white font-roboto font-bold text-center sm:text-7xl text-5xl py-4 sm:py-6"
        ></h2>

        <div class="text-center py-4 sm:py-0">
          <NuxtLink :to="slide.url">
            <button
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
</template>

<script setup>
const slides = reactive([
  {
    name: 'slide1',
    backgroundImage:
      'https://static.wixstatic.com/media/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg/v1/fill/w_800,h_244,al_c,q_80,enc_auto/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg',
    position: 'center',
    subtitle: 'PLATAFORMA CRÍTICA',
    title: 'MÁQUINA<br/>KIRLIAN',
    buttonMessage: 'Leer más',
    url: '/phantasma/maquina-kirlian',
  },
  {
    name: 'slide2',
    backgroundImage:
      'https://static.wixstatic.com/media/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg/v1/fill/w_1613,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg',
    position: 'top right',
    title: 'PAISAJES DE LA<br/>INFANCIA',
    subtitle: '1° REVISTA / DOSSIER PHANTASMA',
    buttonMessage: 'Descárgalo aquí',
    url: '/post/n1-phantasma-paisajes-de-la-infancia',
  },
]);
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
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
