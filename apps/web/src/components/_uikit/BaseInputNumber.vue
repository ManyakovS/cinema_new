<template>
  <VNumberInput
    v-bind="{ ...$attrs, ...props }"
    errorMessages="СЫН БЛЯДИ"
    rounded="lg"
    controlVariant="default"
    @update:model-value="(value) => $emit('update:model-value', value)"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </VNumberInput>
</template>

<script setup lang="ts">
  // Types
  import { VNumberInput } from 'vuetify/labs/VNumberInput'
  type QBtnType = InstanceType<typeof VNumberInput>['$props']

  interface IProps extends /* @vue-ignore */ QBtnType {
    modelValue: string
  }

  const props = defineProps<IProps>()

  const $emit = defineEmits<{
    (e: 'update:model-value', value: string): void
  }>()
</script>

<style scoped lang="scss">
  :deep(input:-webkit-autofill),
  :deep(input:-webkit-autofill:hover),
  :deep(input:-webkit-autofill:focus),
  :deep(input:-webkit-autofill:active) {
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(
      var(--v-theme-on-background),
      var(--v-high-emphasis-opacity)
    );
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
