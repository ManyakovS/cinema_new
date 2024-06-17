<template>
  <div class="d-flex base-icon__with-text items-center">
    <VIcon size="24" :icon="icon" />

    <span class="ml-2 text-sm">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label: string
    icon: string
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
