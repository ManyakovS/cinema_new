<template>
  <div class="files-list flex-inline column full-width">
    <div class="files-list__images" v-if="!imageAsRow && imageFiles.length">
      <FileImage
        v-for="file in imageFiles"
        :key="file.id"
        :readonly="readonly"
        :actions="actions"
        :file="file"
        :highlightedText="highlightedText"
        @remove="removeFile"
      />
    </div>

    <ConfirmationDialog ref="confirmationDialog" />
  </div>
</template>

<script lang="ts" setup>
  // Core
  import { computed, ref } from 'vue'

  // Types
  import { Image } from '@/@types/schema'
  import { FileItemActions } from '../model/types'

  export interface IProps {
    file: Image
    readonly?: boolean
    actions?: FileItemActions[]
    fileFullWidth?: boolean
    highlightedText?: string[]
    hideDate?: boolean
    hideSize?: boolean
    files: Image[]
    fileIds: number[]
    imageAsRow?: boolean
    isNeedFileDeleteConfirmation: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    files: () => [],
    readonly: false,
    fileFullWidth: true,
    highlightedText: () => [],
    isNeedFileDeleteConfirmation: false,
  })

  const $emit = defineEmits<{
    (e: 'update:files', value: Image[]): void
    (e: 'update:fileIds', value: number[]): void
    (e: 'change-file-access', value: Image): void
  }>()

  const confirmationDialog = ref<ComponentInstance['ConfirmationDialog'] | null>(null)

  const imageFiles = computed(() => {
    return props.files
  })

  const removeFile = async (file: Image) => {
    try {
      if (props.isNeedFileDeleteConfirmation)
        await confirmationDialog.value?.open(
          'Удаление файла',
          `Вы уверены, что хотите удалить файл <strong class="break-all">${file.name}</strong>?`
        )

      const id = file.id
      const files = props.files.filter((f) => id !== f.id)
      const fileIds = files.map((f) => f.id)

      $emit('update:files', files)
      $emit('update:fileIds', fileIds)
    } catch (error) {
      // cancel
    }
  }
</script>

<style lang="scss" scoped>
  .files-list {
    &__images {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      @media (--md-min) {
        gap: 24px;
      }

      @media (--lg-min) {
        gap: 32px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &__item {
      max-width: 100%;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
</style>
