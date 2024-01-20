<template>
  <div>
    <h3 class="font-avenir font-bold text-2xl text-phantasma-light-blue pb-4">
      {{ member.position }}
    </h3>

    <!-- Check if member.author exists -->
    <div v-if="member.author">
      <!-- If member.author exists, wrap the name in a NuxtLink -->
      <NuxtLink
        class="font-avenir font-bold text-2xl text-white"
        :to="`/phantasma/autor/${member.author.id}`"
      >
        <div class="tooltip tooltip-bottom text-left" data-tip="Ver entradas">
          {{ member.name }}
        </div>
      </NuxtLink>
    </div>

    <!-- If member.author does not exist, just display the name -->
    <h3 v-else class="font-avenir font-bold text-2xl text-white text-left">
      {{ member.name }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { EditorialMember } from '~/ts/types/editorialMember.types';

const { member } = defineProps({
  member: {
    type: Object as PropType<EditorialMember>,
    required: true,
  },
});
</script>
