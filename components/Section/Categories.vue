<template>
  <div class="bg-black">
    <div class="max-w-6xl m-auto py-10 px-6 relative z-10">
      <div class="rounded-sm p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10" v-if="categories">
          <CategoryItem
            v-for="(item, index) in categories"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Category } from '@/ts/types/category.types';

const { categories } = defineProps({
  categories: {
    type: Object as PropType<Category[]>,
    required: true,
  },
});
</script>
