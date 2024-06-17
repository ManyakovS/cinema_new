<template>
  <VOtpInput
    focus-all
    variant="underlined"
    v-bind="{ ...$attrs, ...props }"
    rounded="lg"
    @update:model-value="(value: string) => $emit('update:model-value', value)"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </VOtpInput>
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
  }>()
</script>
