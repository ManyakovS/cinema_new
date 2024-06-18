<template>
  <BaseTooltip location="bottom" text="Скопировано">
    <template v-slot:default="{ activator: { props }, click }">
      <VBtn
        v-bind="{...props, ...$attrs }"
        class="base-share-button text-white bg-transparent"
        size="26"
        icon="mdi-share-variant"
        @click="handleShare(click)"
      />
    </template>
  </BaseTooltip>
</template>

<script setup lang="ts">
  import { getCurrentPath } from '@/utils/functions/get-current-path'

  interface Props {
    shareValue?: string
  }

  const props = defineProps<Props>()

  const handleShare = (click: () => void) => {
    click()
    navigator.clipboard.writeText(props.shareValue ?? getCurrentPath()).catch()
  }
</script>

<style scoped lang="scss">
  .base-share-button {
    position: absolute;
    top: 20px;
    right: 16px;
  }

  :deep(.v-overlay__content) {
    background: transparent;
    color: #fff;
  }
</style>
