<template>
  <div
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
    class="relative w-full h-[300px] lg:h-[500px] grid place-items-center bg-fixed bg-cover bg-center"
  >
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <!-- <NuxtImg
        :src="backgroundImage"
        quality="60"
        width="1920"
        class="object-cover h-full w-full -z-10"
      /> -->
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-30"
      ></div>
    </div>

    <div class="max-w-5xl w-full h-full relative">
      <div
        class="bg-brown-transparent absolute left-1/2 top-[60%] h-44 w-[397px]"
      ></div>
      <div class="absolute -bottom-24 right-0">
        <NuxtImg
          :src="backgroundImage"
          width="397"
          height="236"
          class="h-[236px] w-[397px] object-cover z-20"
        />
      </div>
    </div>

    <!-- Slide Content -->
  </div>
</template>

<script setup>
const { backgroundImage } = defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
