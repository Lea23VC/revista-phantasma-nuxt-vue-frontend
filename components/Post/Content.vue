<template>
  <div class="font-avenir !text-black" v-html="content"></div>
</template>

<script setup>
const { content } = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
:deep(img) {
  padding: 0 20px 0 20px;
}

:deep(p) {
  font-family: 'Avenir', sans-serif !important;
  line-height: 1.5;
  padding: 10px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
}
:deep(iframe) {
  @media screen and (max-width: 768px) {
    width: 100% !important;
    height: 250px !important;
  }
}
</style>
