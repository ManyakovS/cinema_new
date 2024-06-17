<template>
  <BaseDropZone
    v-bind="{...$attrs, ...props }"
    :error-messages="
      baseErrorMessage ? props.errorMessages || baseErrorMessage : undefined
    "
    @update:fileIds="handleInput"
    @update:files="val => $emit('update:files', val)"
    @blur="handleBlur"
  >
    <slot :errorMessages="baseErrorMessage">
      <BaseButton :label="label" :color="baseErrorMessage ? 'error' : 'primary'"/>
    </slot>
  </BaseDropZone>
</template>

<script lang="ts" setup>
// @ts-nocheck
  // Core
  import { required } from '@vee-validate/rules'
  import { useField } from 'vee-validate'

  // Types
  import BaseDropZone from '@/components/helpers/BaseDropZone.vue'

  type QBaseDropZoneType = InstanceType<typeof BaseDropZone>['$props']

  interface IProps extends /* @vue-ignore */ QBaseDropZoneType {
    name: string
    label?: string
    errorMessages: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    label: 'Загрузить изображения',
  })

  const {
    value: formValue,
    errorMessage: baseErrorMessage,
    handleChange,
    validate,
  } = useField<number[]>(props.name, required, { validateOnValueUpdate: false })

  function handleInput(value: number[]) {
    handleChange(value, false)

    validate()
  }

  function handleBlur() {
    if (props.validateOnBlur) validate()
  }
</script>
