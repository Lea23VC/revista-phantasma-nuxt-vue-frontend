<template>
  <div class="relative h-[800px]">
    <NuxtImg
      :src="backgroundImage"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</template>

<script setup>
const backgroundImage = ref(
  'https://static.wixstatic.com/media/9b943a_83018be20f8b4957a1e8858945ac0a43~mv2.jpg',
);
</script>
