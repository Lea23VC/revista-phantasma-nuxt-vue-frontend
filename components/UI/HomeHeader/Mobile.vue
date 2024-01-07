<template>
  <div class="navbar bg-black text-white">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <SVGIconMenu></SVGIconMenu>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-black rounded-box w-60 font-libre-baskerville"
        >
          <li v-for="(link, index) in navigation" :key="index">
            <NuxtLink :to="link.data.slug" class="py-2">
              {{ link.label }}
            </NuxtLink>
            <ul class="p-2 bg-black" v-if="link.children">
              <li v-for="child in link.children" :key="child.label">
                <NuxtLink :to="child.data.slug" class="py-2"
                  >{{ child.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <div class="p-2 flex">
              <FormsSearchInput
                v-model="searchValue"
                @searchOrHide="searchOrHide"
              ></FormsSearchInput
              ><UButton
                icon="i-heroicons-magnifying-glass"
                size="xs"
                :color="'white'"
                square
                variant="solid"
                @click="searchOrHide()"
              />
            </div>
          </li>
        </ul>
      </div>
      <NuxtLink
        to="/"
        class="btn btn-ghost normal-case text-xl font-libre-baskerville text-white"
      >
        {{ title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from '~/ts/types/navigation.types';

const { title, navigation } = defineProps({
  title: String,
  navigation: {
    type: (Object as PropType<Navigation[]>) || undefined,
    required: false,
  },
});

function removeFocusFromDropdown() {
  // @ts-ignore
  document.activeElement.blur();
}

const searchValue = ref('');
function searchOrHide() {
  if (searchValue.value != '') {
    removeFocusFromDropdown();
    navigateTo({
      path: '/phantasma/blog',
      query: { q: searchValue.value },
    });
    searchValue.value = '';
  }
}
</script>

<style></style>
