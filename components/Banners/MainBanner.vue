<template>
  <!-- Section: Design Block -->
  <section class="relative mb-40">
    <!-- Jumbotron -->
    <div
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
      class="relative bg-cover px-6 py-56 text-center dark:bg-neutral-900"
    >
      <div
        class="relative z-10 m-auto grid max-w-3xl grid-cols-7 gap-4 gap-x-6"
      >
        <div class="col-span-6">
          <h1
            class="mt-2 text-right font-libre-baskerville text-5xl tracking-tight text-white md:text-6xl xl:text-8xl"
          >
            {{ firstText }}
          </h1>
        </div>
        <div class="relative">
          <div
            :style="{ backgroundColor: leftLineColor }"
            class="absolute -right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
          ></div>
        </div>
        <div class="relative col-span-2 h-full">
          <div
            :style="{ backgroundColor: rightLineColor }"
            class="absolute right-0 top-1/2 h-4 w-full -translate-y-1/2 transform"
          ></div>
        </div>
        <div class="col-span-4">
          <h1
            class="mt-2 font-libre-baskerville text-5xl tracking-tight text-white md:text-6xl xl:text-8xl"
          >
            {{ secondText }}
          </h1>
        </div>
      </div>

      <div class="m-auto max-w-2xl">
        <h3
          class="mt-2 font-libre-baskerville text-lg text-right tracking-tight text-white md:text-xl xl:text-2xl"
        >
          Revista / Dossier
        </h3>
      </div>

      <div class="max-w-2xl m-auto z-10">
        <img
          src="https://static.wixstatic.com/media/9b943a_337e63d1abe74f3a981d8ea605bdcd93~mv2.jpg/v1/crop/x_0,y_120,w_794,h_529/fill/w_368,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fotos-de-fantasmas-de-principios-del-sig.jpg"
        />
      </div>

      <div class="m-auto max-w-2xl">
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
      <div
        class="bg-brown-transparent absolute left-1/4 top-1/3 h-56 w-1/2 z-10"
      ></div>
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
</script>

<style scoped>
.bg-brown-transparent {
  background-color: rgba(153, 153, 151, 0.2); /* Brown color with 50% opacity */
}
</style>
