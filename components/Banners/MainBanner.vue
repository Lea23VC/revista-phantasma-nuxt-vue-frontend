<template>
  <!-- Section: Design Block -->
  <section class="relative mb-40">
    <!-- Jumbotron -->
    <div
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
      class="bg-cover px-6 text-center dark:bg-neutral-900 lg:h-[calc(100vh-4rem)] h-[600px]"
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
              <h1
                class="mt-2 text-right font-libre-baskerville text-5xl tracking-tight text-white md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl"
              >
                {{ firstText }}
              </h1>
              <div class="relative w-20">
                <div
                  :style="{ backgroundColor: leftLineColor }"
                  class="absolute right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <div class="flex flex-row justify-end">
              <div class="relative w-40">
                <div
                  :style="{ backgroundColor: rightLineColor }"
                  class="absolute right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
                ></div>
              </div>
              <h1
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
          <img
            class="z-20 relative h-40 xl:h-44 2xl:h-48"
            src="https://static.wixstatic.com/media/9b943a_337e63d1abe74f3a981d8ea605bdcd93~mv2.jpg/v1/crop/x_0,y_120,w_794,h_529/fill/w_368,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fotos-de-fantasmas-de-principios-del-sig.jpg"
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

        <!-- Brown transparent rectangle in the middle -->
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</template>

<script setup>
const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg/v1/fill/w_794,h_447,al_c,q_80,enc_auto/9b943a_89ad18ab9c194897a2f504267f1f75b9~mv2.jpg',
);
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
