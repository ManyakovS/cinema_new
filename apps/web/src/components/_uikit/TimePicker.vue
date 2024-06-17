<template>
  <v-container>
    <v-text-field
      :model-value="modelValue"
      :active="modal"
      :focused="modal"
      variant="solo"
      label="Время"
      prepend-icon="mdi-clock-time-four-outline"
      readonly
      @update:model-value="(val) => $emit('update:modelValue', val)"
    >
      <v-menu
        v-model="modal"
        :close-on-content-click="false"
        activator="parent"
        transition="scale-transition"
      >
        <VTimePicker
          v-if="modal"
          hide-header
          format="24hr"
          :model-value="modelValue"
          @update:model-value="(val) => $emit('update:modelValue', val)"
        />
      </v-menu>
    </v-text-field>
  </v-container>
</template>

<script setup lang="ts">
  import { VTimePicker } from 'vuetify/labs/VTimePicker'

  interface Props {
    modelValue: string
  }

  defineProps<Props>()

  const modal = ref(false)

  const $emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void
  }>()
</script>

<style scoped></style>
