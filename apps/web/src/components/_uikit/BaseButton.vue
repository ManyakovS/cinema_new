<template>
  <VBtn v-bind="{ ...$attrs, ...$props } " :color="$props.color || 'primary'" rounded="lg">
    <slot
      ><p class="font-semibold text-center w-full">{{ props.label }}</p></slot
    >
  </VBtn>
</template>

<script setup lang="ts">
  // Types
  import type { VBtn } from 'vuetify/components/VBtn'
  type QBtnType = InstanceType<typeof VBtn>['$props']

  interface IProps extends /* @vue-ignore */ QBtnType {
    label: string
  }

  const props = withDefaults(defineProps<IProps>(), {})
</script>

<style scoped></style>
