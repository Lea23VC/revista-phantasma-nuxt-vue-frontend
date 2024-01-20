<template>
  <UIHomeHeaderDesktop
    class="hidden lg:flex"
    :title="title"
    :navigation="data?.navigation"
    :pending="pending"
  />

  <UIHomeHeaderMobile
    class="flex lg:hidden"
    :title="title"
    :navigation="data?.navigation"
    :pending="pending"
  />
</template>

<script setup lang="ts">
import GET_NAVIGATION_QUERY from '@/graphql/Queries/navigation/getNavigation.query.graphql';
import type { Navigation } from '~/ts/types/navigation.types';

const { data, pending } = useLazyAsyncQuery<{
  navigation?: Navigation[];
}>(GET_NAVIGATION_QUERY);

const title = ref('Revista Phantasma');
</script>
