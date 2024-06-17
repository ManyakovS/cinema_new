<template>
  <div class="button-back items-center" style="display: inline-flex">
    <RouterLink class="mr-4 text-white" v-if="to" :to="to">
      <VIcon size="26" :color="color" :icon="'mdi-arrow-left'" />
    </RouterLink>

    <slot>
      <div class="text-h3">{{ label }}</div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
  // Types
  import type { RouteLocationRaw } from 'vue-router'

  interface Props {
    to: RouteLocationRaw
    label?: string
    color?: string
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .button-back {
    position: absolute;
    top: 20px;
    left: 16px;
  }
</style>
