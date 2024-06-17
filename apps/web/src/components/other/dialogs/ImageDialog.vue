<template>
  <DialogWrapper
    button-confirm-text="Сохранить"
    :title="imageTitle"
    :button-cancel-visible="false"
    :button-confirm-visible="false"
    :width="1920"
    height="100%"
    :visible="visible"
    @close="closeDialog"
  >
    <div class="image-dialog__image-wrapper">
      <img
        class="image-dialog__image"
        :src="imageLink"
      >
    </div>
  </DialogWrapper>
</template>

<script lang="ts" setup>

  interface Props {
    visible: boolean
    imageLink: string
    imageTitle: string
  }

  defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:visible', value: boolean): void
  }>()

  function closeDialog () {
    $emit('update:visible', false)
  }
</script>

<style lang="scss" scoped>
  .image-dialog__image-wrapper {
    height: calc(100% - 68px);
  }

  .image-dialog__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
