<template>
  <BaseOPTInput
    v-bind="{ ...props }"
    :model-value="formValue"
    :error="!!props.errorMessages || !!baseErrorMessage"
    @update:model-value="handleInput"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </BaseOPTInput>
</template>

<script lang="ts" setup>
// @ts-nocheck
  // Core
  import { required } from '@vee-validate/rules'
  import { useField } from 'vee-validate'

  // Types
  import type { VTextField } from 'vuetify/components/VTextField'
  type QBtnType = InstanceType<typeof VTextField>['$props']

  interface IProps extends /* @vue-ignore */ QBtnType {
    name: string
    validateOnBlur: boolean
    errorMessages: string
    length: number
  }

  const props = withDefaults(defineProps<IProps>(), {
    validateOnBlur: true,
    length: 6,
  })

  const {
    value: formValue,
    errorMessage: baseErrorMessage,
    handleChange,
    validate,
  } = useField<string>(props.name, required, { validateOnValueUpdate: false })

  function handleInput(value: string) {
    handleChange(value, false)

    if (!props.validateOnBlur) validate()
  }
</script>
