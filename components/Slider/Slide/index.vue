<template>
  <div :id="name" class="relative w-full h-full cursor-grab">
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <NuxtImg
        :src="backgroundImage"
        class="object-cover h-full w-full"
        sizes="(max-width: 900px) 100vw, (max-width: 1024px) 100vw, 100vw"
        loading="lazy"
        :placeholder="blur"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      ></div>
    </div>

    <!-- Slide Content -->
    <div class="relative md:max-w-8xl m-auto h-full">
      <div :style="slideContentStyles" :class="`absolute p-20 w-full sm:w-fit`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { name, backgroundImage, position } = defineProps({
  name: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  blur: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
});

let slideContentStyles = getPosition(position.valueOf()) || {};

function getPosition(position: string) {
  switch (position) {
    case 'center':
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      };

    case 'top right':
      return {
        top: '0.5rem',
        right: '0.5rem',
        textAlign: 'right',
      };
  }
}
</script>

<style></style>
