<template>
  <div class="base-fixed-button d-flex items-end justify-center p-4">
    <slot v-bind="{ label, to }">
      <BaseButton
        class="w-50"
        :label="label"
        :to="to"
        @click="$emit('click')"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  interface Props {
    to?: RouteLocationRaw
    label: string
  }

  withDefaults(defineProps<Props>(), {
    to: '/',
  })

  const $emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<style scoped lang="scss">
  .base-fixed-button {
    position: fixed;
    bottom: 66px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(var(--v-theme-background), 0) 0%,
      rgba(var(--v-theme-background), 1) 40%
    );
  }
</style>
