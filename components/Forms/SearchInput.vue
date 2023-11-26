<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="sm"
    color="white"
    :trailing="false"
    :modelValue="searchValue"
    @update:modelValue="updateValue"
    @keyup.enter="onSearchOrHide"
    placeholder="Buscar..."
    input-class="!bg-black !focus:border-white !focus:ring-white !dark:focus:ring-white !dark:focus:border-white"
  />
</template>
<script setup lang="ts">
const { searchValue } = defineProps({
  searchValue: String,
});

// Define emits
const emit = defineEmits(['searchOrHide', 'update:modelValue']);

const onSearchOrHide = () => {
  emit('searchOrHide');
};

const updateValue = (newValue: string) => {
  emit('update:modelValue', newValue);
};
</script>
