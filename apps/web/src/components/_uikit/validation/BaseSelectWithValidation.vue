<template>
  <BaseSelect
    :model-value="formValue"
    :error-messages="
      baseErrorMessage ? props.errorMessages || baseErrorMessage : undefined
    "
    :items="items"
    @update:model-value="handleInput"
    @blur="handleBlur"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="{ ...scope }" />
    </template>
  </BaseSelect>
</template>

<script lang="ts" setup>
// @ts-nocheck
  // Core
  import { required } from '@vee-validate/rules'
  import { useField } from 'vee-validate'

  // Types
  import type { VSelect } from 'vuetify/components/VSelect'
  type QType = InstanceType<typeof VSelect>['$props']

  interface IProps extends /* @vue-ignore */ QType {
    name: string
    validateOnBlur: boolean
    errorMessages: string
    items: { name: string, id: string | number }[]
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
