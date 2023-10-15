<template>
  <div class="navbar bg-black">
    <div class="max-w-7xl m-auto">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl font-libre-baskerville">
          {{ title }}
        </a>
      </div>
      <div class="flex-none z-10">
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
  </div>
</template>

<script setup>
const { title, links } = defineProps({
  title: String,
  links: Array,
});
</script>
