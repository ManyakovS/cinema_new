<template>
  <div v-bind="$attrs" class="d-flex items-center gap-2 h-[24px]">
    <v-switch
      :value="modelValue"
      :color="color"
      hide-details
      @input="({ returnValue }) => $emit('update:model-value', returnValue)"
    />
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    modelValue: boolean
    color?: string
    label?: string
  }

  withDefaults(defineProps<Props>(), {
    color: 'primary',
  })

  const $emit = defineEmits<{
    (e: 'update:model-value', value: boolean): void
  }>()
</script>

<style scoped></style>
