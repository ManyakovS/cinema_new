<template>
  <div class="d-flex flex-column base-icon__with-text">
    <span class="text-sm mb-1">{{ label }}</span>

    <span class="text-primary font-semibold">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label: string
    text: string
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
