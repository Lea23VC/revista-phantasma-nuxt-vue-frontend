<template>
  <div
    class="flex flex-col sm:flex-row items-start sm:items-center font-avenir text-gray-500"
  >
    <NuxtLink :to="'/phantasma/autor/' + id">
      <p>{{ authorName }}</p></NuxtLink
    >
    <i class="mx-2 text-gray-400 hidden sm:block"
      ><SVGIconCircle class="w-1"
    /></i>
    <p>{{ date }}</p>
  </div>
</template>

<script lang="ts" setup>
const { authorName, date } = defineProps({
  authorName: {
    type: String,
  },
  id: {
    type: Number,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>
