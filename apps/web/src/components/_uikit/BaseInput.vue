<template>
  <VTextField
    v-bind="{ ...$attrs, ...props }"
    rounded="lg"
    @update:model-value="(value) => $emit('update:model-value', value)"
    @click:clear="$emit('clear')"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </VTextField>
</template>

<script setup lang="ts">
  // Types
  import type { VTextField } from 'vuetify/components/VTextField'
  type QBtnType = InstanceType<typeof VTextField>['$props']

  interface IProps extends /* @vue-ignore */ QBtnType {
    modelValue: string
  }

  const props = defineProps<IProps>()

  const $emit = defineEmits<{
    (e: 'update:model-value', value: string): void
    (e: 'clear'): void
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
