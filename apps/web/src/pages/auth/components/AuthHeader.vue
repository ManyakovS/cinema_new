<template>
  <h4 class="text-h4 w-full text-center text-primary-lighten-1">{{ title }}</h4>

  <RouterLink :to="{ name: 'login' }">
    <div class="d-flex w-full justify-center h-[200px]">
      <VImg :src="logo" max-width="200" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  // Assets
  import logo from '@/assets/images/logo.webp'

  interface Props {
    title: string
  }

  defineProps<Props>()
</script>

<style scoped></style>
