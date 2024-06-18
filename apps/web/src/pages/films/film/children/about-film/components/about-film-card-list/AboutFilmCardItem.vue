<template>
  <div class="d-flex flex-column w-[90px] items-center justify-start">
    <v-avatar color="surface-variant">
      <v-img alt="John" :src="getImagePath(icon)"/>
    </v-avatar>

    <div class="break-word text-center mt-1">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
  import { getImagePath } from '@/utils/functions/get-image-path'

  interface Props {
    icon: string
    name: string
    position: string
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
.v-avatar {
  @apply rounded-[24px] h-[100px] w-[75px];
}
</style>
