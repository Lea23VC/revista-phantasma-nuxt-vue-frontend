<template>
  <div class="carousel w-full">
    <!-- Use v-for to iterate over slides -->
    <SliderSlide
      v-for="(slide, index) in slides"
      :key="index"
      :name="slide.name"
      :prevSlide="slide.prevSlide"
      :nextSlide="slide.nextSlide"
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
        <button
          class="btn btn-outline font-roboto font-thin border-white text-white"
        >
          Leer más
        </button>
      </div>
    </SliderSlide>
  </div>
</template>

<script setup>
const slides = reactive([
  {
    name: 'slide1',
    prevSlide: 'slide2',
    nextSlide: 'slide2',
    backgroundImage:
      'https://static.wixstatic.com/media/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg/v1/fill/w_800,h_244,al_c,q_80,enc_auto/9b943a_16e94e91c3f145d5b7dedca965e37ca2~mv2.jpg',
    position: 'center',
    subtitle: 'PLATAFORMA CRÍTICA',
    title: 'MÁQUINA<br/>KIRLIAN',
  },
  {
    name: 'slide2',
    prevSlide: 'slide1',
    nextSlide: 'slide1',
    backgroundImage:
      'https://static.wixstatic.com/media/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg/v1/fill/w_1613,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b943a_fdccb00363fe4891bcb984f6725258da~mv2.jpg',
    position: 'top right',
    title: 'PAISAJES DE LA<br/>INFANCIA',
    subtitle: '1° REVISTA / DOSSIER PHANTASMA',
  },
]);
</script>
