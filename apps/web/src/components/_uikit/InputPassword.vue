<template>
  <BaseInputWithValidation
    v-bind="{ ...props }"
    @keyup.enter="$emit('enter', props.value)"
  >
    <template #prepend-inner>
      <VIcon :icon="'mdi-lock'" color="primary" />
    </template>

    <template #append-inner>
      <VIcon
        :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        color="primary"
        @click="showPassword = !showPassword"
      />
    </template>
  </BaseInputWithValidation>
</template>

<script setup lang="ts">
  // Core
  import { ref } from 'vue'

  // Types
  import type { VTextField } from 'vuetify/components/VTextField'
  type QBtnType = InstanceType<typeof VTextField>['$props']

  interface IProps extends /* @vue-ignore */ QBtnType {
    name?: string
    label?: string
    placeholder?: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
  })

  const $emit = defineEmits<{
    (e: 'update:model-value', value: string): void
    (e: 'enter', value: string): void
  }>()

  const showPassword = ref(false)
</script>
