<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <div
    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10"
  >
    <div @click="swiper.slideNext()" class="btn btn-circle">❮</div>
    <div @click="swiper.slidePrev()" class="btn btn-circle">❯</div>
  </div>
</template>
