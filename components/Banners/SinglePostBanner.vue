<template>
  <div class="relative w-full h-[300px] lg:h-[500px] grid place-items-center">
    <!-- Background Image -->
    <div class="absolute h-full w-full">
      <NuxtImg
        placeholder
        :src="backgroundImage"
        :class="dynamicClass"
        :style="style"
        :placeholder="blur"
        quality="60"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-30"
      ></div>
    </div>

    <div
      class="relative font-lulo-clean-one text-xl sm:text-2xl md:text-4xl lg:text-5xl"
    >
      <div
        class="gap-4 flex flex-col"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
      >
        <h2 class="text-black text-center">{{ title ?? 'PHANTASMA' }}</h2>
        <h2 class="text-white text-center">{{ title ?? 'PHANTASMA' }}</h2>
      </div>
    </div>

    <!-- Slide Content -->
  </div>
</template>

<script setup>
const { backgroundImage, blur, position } = defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
  blur: {
    type: String,
  },
  title: {
    type: String,
  },
  position: {
    type: String,
  },
});

const dynamicClass = computed(() => {
  return {
    'object-cover': true,
    'h-full': true,
    'w-full': true,
  };
});
const style = computed(() => {
  return {
    'object-position': position ?? 'center',
  };
});
</script>

<style></style>
