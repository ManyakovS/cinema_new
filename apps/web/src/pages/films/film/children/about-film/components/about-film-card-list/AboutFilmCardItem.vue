<template>
  <div class="d-flex flex-column w-[90px] items-center justify-center">
    <v-avatar size="50" color="surface-variant">
      <v-img alt="John" :src="getImagePath(icon)" />
    </v-avatar>

    <div class="break-word text-center">{{ name }}</div>

    <div class="text-caption text-center">{{ position }}</div>
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

<style scoped></style>
