<template>
  <VSlideGroup v-bind="$attrs" v-model:model-value="_selectedIndex">
    <VSlideGroupItem
      v-for="(item, index) in slides"
      :key="index"
      v-slot="{ toggle, isSelected }"
    >
      <slot
        name="default"
        :isSelected="isSelected"
        :toggle="toggle"
        :item="item"
      />
    </VSlideGroupItem>
  </VSlideGroup>
</template>

<script setup lang="ts">
  import { isEqual } from 'lodash'

  interface Props {
    selected: any
    slides: any[]
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:selected', value: any): void
  }>()

  const _selectedIndex = computed({
    get() {
      if (!props.selected) return 0
      else {
        return props.slides?.findIndex((s) =>
          isEqual(s?.id, props.selected?.id),
        )
      }
    },
    set(index: number) {
      $emit('update:selected', props.slides[index])
      return index
    },
  })
</script>

<style scoped></style>
