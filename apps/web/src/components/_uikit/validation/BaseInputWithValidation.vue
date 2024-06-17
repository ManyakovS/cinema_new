<template>
  <BaseInput
  :model-value="formValue"
  :error-messages="
      baseErrorMessage ? props.errorMessages || baseErrorMessage : undefined
      "
    @update:model-value="handleInput"
    @blur="handleBlur"
    >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </BaseInput>
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
  }

  const props = withDefaults(defineProps<IProps>(), {
    validateOnBlur: true,
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

  function handleBlur() {
    if (props.validateOnBlur) validate()
  }
</script>
