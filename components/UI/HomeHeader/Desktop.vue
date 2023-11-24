<template>
  <header class="navbar bg-black z-[999]" ref="headerRef" :style="styles">
    <div class="max-w-7xl m-auto">
      <div class="flex-1">
        <NuxtLink
          to="/"
          class="btn btn-ghost normal-case text-xl font-libre-baskerville text-white"
        >
          {{ title }}
        </NuxtLink>
      </div>
      <div class="flex-none z-10 text-white">
        <ul class="menu menu-horizontal font-libre-baskerville">
          <li
            v-for="(link, index) in links"
            :key="link.name"
            :class="{ 'border-l border-gray-300': index !== 0 }"
          >
            <details v-if="link.children">
              <summary>
                {{ link.name }}
              </summary>
              <ul class="p-2 bg-black text-white font-libre-baskerville">
                <li v-for="child in link.children" :key="child.name">
                  <NuxtLink :to="child.href">{{ child.name }} </NuxtLink>
                </li>
              </ul>
            </details>

            <NuxtLink :to="link.href" v-else>{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const headerRef = ref(null);

import { useFixedHeader } from 'vue-use-fixed-header';

const { styles } = useFixedHeader(headerRef);

const { title, links } = defineProps({
  title: String,
  links: Array,
});
</script>

<style scoped>
header {
  position: fixed; /* or sticky */
  top: 0;
  width: 100%;
}
</style>
