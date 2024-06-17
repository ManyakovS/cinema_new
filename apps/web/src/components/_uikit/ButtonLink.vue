<template>
  <RouterLink :to="props.to">
    <p class="text-primary">
      <slot>{{ label }}</slot>
    </p>
  </RouterLink>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  interface Props {
    to: RouteLocationRaw
    label: string
  }

  const props = defineProps<Props>()
</script>
