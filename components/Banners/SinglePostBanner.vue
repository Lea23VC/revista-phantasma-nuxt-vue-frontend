<template>
  <div class="relative w-full h-[300px] lg:h-[500px] grid place-items-center">
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <NuxtImg :src="backgroundImage" class="object-cover h-full w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-30"
      ></div>
    </div>

    <div
      class="relative font-lulo-clean-one text-xl sm:text-2xl md:text-4xl lg:text-5xl gap-4 flex flex-col"
    >
      <h2 class="text-black">PHANTASMA</h2>
      <h2 class="text-white">PHANTASMA</h2>
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
