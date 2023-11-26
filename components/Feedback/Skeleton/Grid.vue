<template>
  <div :class="`grid grid-cols-1 md:grid-cols-3 gap-10`">
    <div
      v-for="(_, index) in Array.apply(null, Array(gridCols)).map(
        Number.prototype.valueOf,
        0,
      )"
      :key="index"
    >
      <USkeleton class="h-[250px] w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { gridCols } = defineProps({
  gridCols: {
    type: Number,
    required: true,
  },
});
</script>
