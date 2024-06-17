<template>
  <div class="d-flex base-icon__with-text justify-between">
    <span class="font-semibold">{{ label }}</span>

    <slot name="item">
      <span class="font-semibold">{{ cost }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label: string
    cost?: string
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .base-icon__with-text {
    --base-color: rgba(
      var(--v-theme-on-background),
      var(--v-high-emphasis-opacity)
    );

    & * {
      color: var(--base-color);
      opacity: 0.75;
    }
  }
</style>
