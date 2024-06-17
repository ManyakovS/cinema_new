<template>
  <component :is="to ? RouterLink : 'div'" :to="to">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { type RouteLocationRaw, RouterLink } from 'vue-router'

  interface Props {
    to: RouteLocationRaw
  }

  defineProps<Props>()
</script>
