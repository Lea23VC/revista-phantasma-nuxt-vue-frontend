<template>
  <div class="bg-black">
    <div class="md:max-w-6xl m-auto py-10 sm:px-6 relative z-10">
      <div class="rounded-sm p-8">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          v-if="categories"
        >
          <CategoryItem
            v-for="(item, index) in categories"
            :key="index"
            :item="item"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="1200"
            :delay="getDelay(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Category } from '@/ts/types/category.types';

const { categories } = defineProps({
  categories: {
    type: Object as PropType<Category[]>,
    required: true,
  },
});

// Detect screen size for mobile
const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768; // Define breakpoint for mobile
};

onMounted(() => {
  handleResize(); // Initialize check on mount
  window.addEventListener('resize', handleResize); // Update check on resize
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize); // Clean up event listener
});

// Function to adjust delay based on screen size
const getDelay = (index: number) => {
  return isMobile.value ? index * 25 : index * 200; // Faster delay on mobile
};
</script>
