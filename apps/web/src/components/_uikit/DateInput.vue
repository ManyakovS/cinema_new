<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <BaseInput v-bind="{ ...$attrs, ...props }" :errorMessage="errorMessage" :label="label" variant="solo" clearable :model-value="inputFieldValue" @clear="handleClear"/>
    </template>

    <v-card min-width="200">
      <v-date-picker v-bind="{ ...$attrs, ...props }" :model-value="datePickerValue" @update:model-value="handleInput">
        <template #header/>
        <template #title/>
      </v-date-picker>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
  // Core
  import { computed, ref } from 'vue'

  // Types

  // Utils
  import { formatDate } from '@/utils/functions/format-date'
  import { format } from 'date-fns'


  export interface IDateInputProps  {
    modelValue?: string
    value?: string
    range?: boolean
    errorMessage: string
    optionsDate: string
    label: string
  }

  const props = defineProps<IDateInputProps>()

  const $emit = defineEmits<{
    (e: 'input', value: string | null): void
    (e: 'update:modelValue', value: string | null): void
  }>()

  const menu = ref(false)

  const inputFieldValue = computed(() => {
    const { modelValue, value } = props
    const newValue = modelValue || value

    /* if (isDateRangeInputApiTypeGuard(newValue)) {
      const startDate = formatDate(newValue.startDate)
      const endDate = formatDate(newValue.endDate)

      return startDate ? `${startDate} - ${endDate}` : ''
    } */

    return newValue ? format(newValue, 'yyyy-MM-dd') : null
  })

  const datePickerValue = computed(() => {
    const newValue = props.modelValue || props.value

    /* if (isDateRangeInputApiTypeGuard(newValue)) {
      if (newValue.startDate === newValue.endDate)
        return newValue.startDate
      else
        return {
          from: newValue.startDate,
          to: newValue.endDate,
        }
    } */

    return new Date(newValue)
  })

  function handleInput (date: Date) {
    const isRangeDate = false
    let rangeDate!: string

    let newDate = isRangeDate || props.range && date !== null ? rangeDate : format(date, 'yyyy-MM-dd')

    $emit('update:modelValue', newDate)
    $emit('input', newDate)

    if (date !== null) {
      menu.value = false
    }
  }

  function handleClear () {
    if (!menu.value)
      menu.value = true

    $emit('update:modelValue', null)
    $emit('input', null)
  }
</script>
