<template>
  <header class="navbar bg-black z-[999]" ref="headerRef" :style="styles">
    <div class="max-w-7xl m-auto flex-col">
      <div class="p-0 w-full">
        <transition name="fade">
          <div class="flex justify-end px-4 gap-2" v-if="isTopOfPage()">
            <NuxtLink
              to="https://www.facebook.com/revistaphantasma"
              target="_blank"
            >
              <SVGIconFB
                class="h-[15px] text-gray-200 hover:text-white transition-colors duration-300"
              ></SVGIconFB>
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/revista.phantasma/"
              target="_blank"
              ><SVGIconIG
                class="h-[15px] text-gray-200 hover:text-white transition-colors duration-300"
              ></SVGIconIG
            ></NuxtLink>
          </div>
        </transition>
      </div>
      <div class="flex">
        <NuxtLink
          to="/"
          class="btn btn-ghost normal-case text-xl font-libre-baskerville text-white"
        >
          {{ title }}
        </NuxtLink>

        <div class="flex-none z-10 text-white">
          <ul class="menu menu-horizontal font-libre-baskerville">
            <li
              v-for="(link, index) in links"
              :key="link.name"
              :class="{
                'border-l border-gray-300': index !== 0,
                active: link?.href && isActiveRoute(link),
              }"
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
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isTopOfPage = () => scrollY.value === 0;

const headerRef = ref(null);

const route = useRoute();

import { useFixedHeader } from 'vue-use-fixed-header';

const { styles } = useFixedHeader(headerRef);

const { title, links } = defineProps({
  title: String,
  links: Array,
});

const isActiveRoute = (link) => {
  return route.path != '/' && link.href.includes(route.path);
};
</script>

<style scoped>
header {
  position: fixed; /* or sticky */
  top: 0;
  width: 100%;
}
.active {
  font-weight: 900;
  font-size: 115% !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
