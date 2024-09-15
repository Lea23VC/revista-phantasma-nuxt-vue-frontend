<template>
  <!-- Section: Design Block -->
  <section class="relative">
    <!-- Jumbotron -->
    <div
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
      class="bg-cover bg-fixed px-6 text-center dark:bg-neutral-900 lg:h-[calc(100vh-4rem)] h-[600px]"
    >
      <div
        class="bg-brown-transparent absolute left-1/4 top-[38%] h-56 w-1/2 z-10"
      ></div>

      <div
        class="w-full h-full flex grow-0 shrink-0 flex-col items-center justify-center max-w-3xl m-auto"
      >
        <div class="relative z-10 grid grid-cols-7 gap-4 gap-x-6 w-full">
          <div class="col-span-full">
            <div class="flex flex-row justify-center">
              <!-- First Text Animated with Motion -->
              <h1
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  visibleOnce: { opacity: 1, y: 0 },
                }"
                visible-once
                :duration="1200"
                class="mt-2 text-right font-libre-baskerville text-5xl tracking-tight text-white md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl"
              >
                {{ firstText }}
              </h1>
              <div class="relative w-20">
                <!-- Left Line Animated with Motion -->
                <div
                  v-motion="{
                    initial: { opacity: 0, width: '0%' },
                    visibleOnce: { opacity: 1, width: '100%' },
                  }"
                  id="left-line"
                  :style="{ backgroundColor: leftLineColor }"
                  class="absolute right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <div class="flex flex-row justify-end">
              <div class="relative w-40">
                <!-- Right Line Animated with Motion -->
                <div
                  v-motion="{
                    initial: { opacity: 0, width: '0%' },
                    visibleOnce: { opacity: 1, width: '100%' },
                  }"
                  id="right-line"
                  :style="{ backgroundColor: rightLineColor }"
                  class="absolute right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
                ></div>
              </div>
              <!-- Second Text Animated with Motion -->
              <h1
                v-motion="{
                  initial: {
                    opacity: 0,
                    y: 100,
                  },
                  visibleOnce: { opacity: 1, y: 0 },
                }"
                :duration="1200"
                class="mt-2 text-right font-libre-baskerville text-5xl tracking-tight text-white md:text-7xl xl:text-7xl 2xl:text-8xl"
              >
                {{ secondText }}
              </h1>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h3
            class="mt-2 font-libre-baskerville text-lg text-right tracking-tight text-white md:text-xl xl:text-2xl"
          >
            {{ subtitle }}
          </h3>
        </div>

        <!-- Image with higher z-index -->
        <div class="w-full">
          <NuxtImg
            class="z-20 relative h-40 xl:h-44 2xl:h-48"
            src="/main-background.webp"
          />
        </div>

        <div class="pt-10">
          <h3
            class="mt-2 font-libre-baskerville text-lg tracking-tight text-white md:text-xl xl:text-3xl"
          >
            Literatura y Artes visuales <br />
            Creación y Crítica
          </h3>
        </div>
        <!-- White line on the left of the first "Phantasma" -->
        <div
          class="absolute left-0 top-1/2 h-px w-16 -translate-y-1/2 transform bg-white"
        ></div>
        <!-- White line on the right of the second "Phantasma" -->
        <div
          class="absolute right-0 top-1/2 h-px w-16 -translate-y-1/2 transform bg-white"
        ></div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Define your reactive data
const backgroundImage = ref('main-background.webp');
const firstText = ref('Phantasma');
const secondText = ref('Phantasma');
const leftLineColor = ref('white');
const rightLineColor = ref('black');
const subtitle = ref('Revista / Dossier');
</script>

<style scoped>
.bg-brown-transparent {
  background-color: rgba(153, 153, 151, 0.2); /* Brown color with 50% opacity */
}
</style>
