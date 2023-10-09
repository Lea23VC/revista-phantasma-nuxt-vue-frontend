<template>
  <div class="navbar bg-black">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-black rounded-box w-52 font-libre-baskerville"
        >
          <li v-for="(link, index) in links" :key="index">
            <a class="py-2">
              {{ link.name }}
            </a>
            <ul class="p-2 bg-black" v-if="link.children">
              <li v-for="child in link.children" :key="child.name">
                <a class="py-2">{{ child.name }} </a>
              </li>
            </ul>
          </li>

          <!-- <li v-else>
            <a>{{ link.name }}</a>
          </li> -->
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl font-libre-baskerville">
        {{ title }}
      </a>
    </div>
  </div>
</template>

<script setup>
const { title, links } = defineProps({
  title: String,
  links: Array,
});
</script>

<style></style>
