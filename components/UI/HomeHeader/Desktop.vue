<template>
  <header class="navbar bg-black z-[999]" ref="headerRef" :style="styles">
    <div class="max-w-6xl m-auto flex-col w-full">
      <div class="p-0 w-full">
        <transition name="fade">
          <div
            class="flex justify-end items-center px-4 gap-2 max-h-[28px]"
            v-if="isTopOfPage()"
          >
            <transition name="fade">
              <div class="flex gap-2" v-if="!searchButtonPressed">
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
              <div v-else>
                <FormsSearchInput
                  v-model="searchValue"
                  @searchOrHide="searchOrHide"
                ></FormsSearchInput>
              </div>
            </transition>

            <div class="flex items-center">
              <UButton
                icon="i-heroicons-magnifying-glass"
                size="xs"
                :color="searchButtonPressed ? 'black' : 'white'"
                square
                variant="solid"
                @click="searchOrHide()"
              />
            </div>
          </div>
        </transition>
      </div>
      <div class="flex w-full">
        <NuxtLink
          to="/"
          class="btn btn-ghost normal-case text-xl font-libre-baskerville text-white"
        >
          {{ title }}
        </NuxtLink>

        <div class="flex z-10 text-white w-full justify-end">
          <ul class="menu menu-horizontal font-libre-baskerville">
            <li
              v-for="(link, index) in navigation"
              :key="link.label"
              :class="{
                'border-l border-gray-300': index !== 0,
                active: link?.data.slug && isActiveRoute(link),
              }"
            >
              <details v-if="link.children">
                <summary>
                  {{ link.label }}
                </summary>
                <ul class="p-2 bg-black text-white font-libre-baskerville">
                  <li v-for="child in link.children" :key="child.label">
                    <NuxtLink :to="child.data.slug"
                      >{{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </details>

              <NuxtLink :to="link.data.slug" v-else>{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Navigation } from '~/ts/types/navigation.types';

const scrollY = ref(0);

const searchButtonPressed = ref(false);

const searchValue = ref('');

function searchOrHide() {
  if (searchValue.value != '') {
    navigateTo({
      path: '/phantasma/blog',
      query: { q: searchValue.value },
    });
  } else {
    searchButtonPressed.value = !searchButtonPressed.value;
  }
}

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

const { title, navigation } = defineProps({
  title: String,
  navigation: {
    type: Object as PropType<Navigation[]>,
    required: false,
  },
});

const isActiveRoute = (link: Navigation) => {
  return route.path != '/' && link.data.slug.includes(route.path);
};

watch(
  () => route.path,
  () => {
    searchButtonPressed.value = false;
    searchValue.value = '';
  },
);
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
