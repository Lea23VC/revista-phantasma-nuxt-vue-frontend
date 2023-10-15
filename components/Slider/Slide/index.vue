<template>
  <div :id="name" class="carousel-item relative w-full h-[600px]">
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <NuxtImg :src="backgroundImage" class="object-cover h-full w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      ></div>
    </div>

    <!-- Slide Content -->
    <div class="relative w-full">
      <div :class="`absolute p-16 ${twSlidePosition}`">
        <slot />
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div
      class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
    >
      <a :href="prevSlideRef" class="btn btn-circle">❮</a>
      <a :href="nextSlideRef" class="btn btn-circle">❯</a>
    </div>
  </div>
</template>

<script setup>
const { name, backgroundImage, prevSlide, nextSlide, position } = defineProps({
  name: String,
  backgroundImage: String,
  prevSlide: String,
  nextSlide: String,
  position: String,
});

const prevSlideRef = ref('#' + prevSlide);
const nextSlideRef = ref('#' + nextSlide);

// Calculate Tailwind CSS class for slide position
let twSlidePosition = '';
let twTextAlign = '';

switch (position) {
  case 'center':
    twSlidePosition = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    twTextAlign = 'text-center';
    break;

  case 'top right':
    twSlidePosition = 'top-2 right-2';
    twTextAlign = 'text-right';
    break;
}
</script>

<style></style>
