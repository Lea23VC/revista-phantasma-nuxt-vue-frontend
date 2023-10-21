<template>
  <div :id="name" class="relative w-full h-full">
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <NuxtImg :src="backgroundImage" class="object-cover h-full w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      ></div>
    </div>

    <!-- Slide Content -->
    <div class="relative w-full h-full">
      <div :style="slideContentStyles" :class="`absolute p-20`">
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
  position: {
    type: String,
    required: true,
  },
});

let slideContentStyles = {};

switch (position) {
  case 'center':
    slideContentStyles = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
    };
    break;

  case 'top right':
    slideContentStyles = {
      top: '0.5rem',
      right: '0.5rem',
      textAlign: 'right',
    };
    break;
}
</script>

<style></style>
