<template>
  <BaseImage
    class="base-film-image bg-white"
    v-bind="$attrs"
    :src="img"
    :aspect-ratio="1"
    cover
  />
</template>

<script setup lang="ts">
  interface Props {
    img: string
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .base-film-image {
    border-radius: 12px;
  }
</style>
