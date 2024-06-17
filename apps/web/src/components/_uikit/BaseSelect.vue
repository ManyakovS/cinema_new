<template>
  <v-select
    :items="items"
    :model-value="modelValue"
    item-title="name"
    item-value="id"
    variant="solo"
    clearable
    @update:model-value="value => $emit('update:model-value', value)"
  >
    <template v-slot:item="{ props, item }">
        <slot name="item" :item="item" :props="props">
            <v-list-item v-bind="{ ...props }" :subtitle="item.raw.department"/>
        </slot>
    </template>
  </v-select>
</template>

<script setup lang="ts">
  // Types
  import type { VSelect } from 'vuetify/components/VSelect'
  type QType = InstanceType<typeof VSelect>['$props']

  interface IProps extends /* @vue-ignore */ QType {
    modelValue: string
    items: { name: string, id: string | number, department?: string }[]
  }

  defineProps<IProps>()

  const $emit = defineEmits<{
    (e: 'update:model-value', value: string): void
  }>()
</script>

<style scoped></style>
