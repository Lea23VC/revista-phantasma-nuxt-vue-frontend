<template>
  <div class="flex flex-col md:flex-row h-[700px] md:h-[500px] w-full -mt-2">
    <!-- Left side (1/3 width in desktop, full width in mobile) -->
    <div class="w-full md:w-[45%] bg-black relative h-full">
      <!-- Image layer -->
      <img
        src="https://static.wixstatic.com/media/9b943a_19fc0ae0d178435db1526abfa009169a~mv2.jpeg/v1/crop/x_25,y_0,w_451,h_500,q_80,enc_auto/9b943a_19fc0ae0d178435db1526abfa009169a~mv2.jpeg"
        alt="Left Image"
        class="absolute inset-0 w-full h-full object-contain"
      />
    </div>

    <!-- Right side (2/3 width in desktop, full width in mobile) -->
    <div class="w-full md:w-[55%] relative h-full">
      <!-- Background image -->
      <img
        src="https://static.wixstatic.com/media/9b943a_2e592c8477be429a8049e449835d5c36~mv2.png/v1/fill/w_676,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b943a_2e592c8477be429a8049e449835d5c36~mv2.png"
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Buttons -->
      <div
        class="absolute inset-x-0 bottom-[15%] p-4 flex justify-center gap-4"
      >
        <button class="btn bg-black bg-opacity-70 p-3 rounded-full h-full">
          <SVGIconFB color="white" class="h-[30px] w-auto" />
        </button>
        <button class="btn bg-black bg-opacity-70 p-3 rounded-full h-full">
          <SVGIconIG color="white" class="h-[30px] w-auto" />
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* You can add additional styles here if needed */
</style>
