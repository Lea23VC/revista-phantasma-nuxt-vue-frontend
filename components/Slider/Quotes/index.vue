<template>
  <div>
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
      <SwiperSlide>
        <SliderSlide
          name="slide-1"
          background-image="https://static.wixstatic.com/media/9b943a_e4ff24076c5d42a3af0972798d0081aa~mv2.jpg"
          position="center"
        >
          <div class="bg-red-400 aspect-square w-[400px] h-[500px]">
            ddddddd
          </div>
        </SliderSlide>
      </SwiperSlide>

      <SwiperSlide>
        <SliderSlidev
          name="slide-1"
          background-image="https://static.wixstatic.com/media/9b943a_e4ff24076c5d42a3af0972798d0081aa~mv2.jpg"
          position="center"
        >
          sdsd
        </SliderSlidev>
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const slides = ref(
  Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Figure out contrast color for font
    const contrast =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
  }),
);
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
