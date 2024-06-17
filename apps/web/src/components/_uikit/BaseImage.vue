<template>
  <VImg v-bind="$attrs" :src="baseURL" />
</template>

<script setup lang="ts">
  import { getImagePath } from '@/utils/functions/get-image-path'

  interface Props {
    src: string
  }

  const props = defineProps<Props>()

  const baseURL = getImagePath(props.src)
</script>

<style scoped></style>
