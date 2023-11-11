<template>
  <div
    class="relative w-full h-[300px] lg:h-[400px] grid place-items-center bg-fixed bg-cover bg-center"
  >
    <!-- Background Image -->
    <div class="absolute h-full w-full z-0">
      <NuxtImg
        :src="backgroundImage"
        quality="60"
        width="1920"
        :placeholder="blur"
        class="object-cover h-full w-full"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-30"
      ></div>
    </div>

    <div
      class="relative sm:hidden font-lulo-clean-one text-4xl sm:text-2xl md:text-4xl lg:text-5xl gap-4 flex flex-col"
    >
      <h2 class="text-white">{{ name }}</h2>
    </div>

    <div class="max-w-5xl w-full h-full relative hidden sm:block">
      <div class="absolute left-1/2 top-[50%] h-44 w-[397px]">
        <div class="bg-brown-transparent z-10 h-full"></div>
      </div>
      <div class="absolute -bottom-24 right-0 z-50">
        <NuxtImg
          :src="backgroundImage"
          width="397"
          height="236"
          class="h-[236px] w-[397px] object-cover"
          :placeholder="blur"
        />
      </div>
    </div>

    <!-- Slide Content -->
  </div>
</template>

<script setup>
const { backgroundImage, name, blur } = defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  blur: {
    type: String,
  },
});
</script>

<style scoped>
.bg-brown-transparent {
  background-color: rgba(78, 78, 69, 0.5); /* Brown color with 50% opacity */
}
</style>
