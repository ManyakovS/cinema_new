<template>
  <v-checkbox
    class="base-checkbox"
    :class="{ 'with-label': props.label }"
    v-bind="{ ...props }"
    :model-value="_value"
    @update:model-value="updateValue"
  />
</template>

<script lang="ts" setup>
  // Core
  import { computed } from 'vue'

  // Types
  import type { VCheckbox } from 'vuetify/components/VCheckbox'
  type QBtnType = InstanceType<typeof VCheckbox>['$props']

  interface Props extends QBtnType {
    modelValue: boolean
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'input', value: boolean): void
  }>()

  const _value = computed(() => props.modelValue || false)

  function updateValue(value: boolean) {
    $emit('update:modelValue', value)
    $emit('input', value)
  }
</script>

<style lang="scss" scoped>
  .base-checkbox {
    margin: -11px -10px -11px -10px;
  }

  .with-label {
    margin: -11px 0px -11px -10px;
  }
</style>
