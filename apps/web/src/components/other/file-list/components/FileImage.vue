<template>
  <a
    class="file-image"
    :href="getImagePath(file.path)"
    target="_blank"
    :style="{ '--file-image-name-max-width': fileNameMaxWidth }"
    @click="handleClick"
  >
    <img
      class="file-image__image"
      :src="getImagePath(file.path)"
    />
    <div class="file-image__text-container row justify-between no-wrap">
      <div class="file-image__file-name text-caption text-weight-medium items-center hidden-sm-max">
        <HighlightedText
          v-if="highlightedText.length"
          class="ellipsis limited-width"
          :search="highlightedText"
          :text="truncatedFileName.name"
        />
        <div v-else class="ellipsis">{{truncatedFileName.name}}</div>
        <div class="text-no-wrap">{{`.${truncatedFileName.format}` }}</div>
      </div>

      <template v-if="!readonly">
        <!-- Архивации для изображений нет -->
        <div class="file-image__control-group">
          <ButtonIconWithTooltip
            v-if="actions.includes(FileItemActions.DELETE) && !readonly"
            class="file-image__control"
            icon="mdi-close"
            color="white"
            tooltipText="Удалить"
            @click.prevent="emit('remove', file)"
          />
        </div>
      </template>
    </div>
  </a>
</template>

<script lang="ts" setup>
  // Core
  import { computed } from 'vue'

  // Hooks
  import { useTruncateFileName } from '@/utils/hooks/use-truncate-file-name'
  import { getImagePath } from '@/utils/functions/get-image-path'

  // Types
  import { FileItemActions } from '../model/types'
  import { Image } from '@/@types/schema'

  export interface IProps {
    file: Image
    readonly?: boolean,
    actions?: FileItemActions[],
    fileFullWidth?: boolean,
    convertTimeZone?: boolean,
    highlightedText?: string[],
    hideDate?: boolean,
    hideSize?: boolean,
  }

  const props = withDefaults(defineProps<IProps>(), {
    readonly: false,
    fileFullWidth: true,
    actions: () => [FileItemActions.DELETE],
    highlightedText: () => [],
  })

  const emit = defineEmits<{
    (e: 'remove', value: Image): void,
    (e: 'change-access', value: Image): void,
    (e: 'access-denied', value: Image): void,
  }>()

  const { truncatedFileName } = useTruncateFileName(props.file.name)

  const fileNameMaxWidth = computed((): string => {
    return props.actions.length > 1 ? '72px' : '102px'
  })

  const handleClick = (e: MouseEvent) => {
    const { file } = props
  }

</script>

<style lang="scss" scoped>
  .file-image {
    display: inline-block;
    position: relative;
    width: 150px;
    height: 96px;
    border-radius: 16px;
    overflow: hidden;

    @media (--md-min) {
      width: 234px;
      height: 150px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(0deg, transparent 0%, #333 100%);
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-container {
      top: 0;
      width: 100%;
      position: absolute;
      padding: 12px;
      gap: 10px;
    }

    &__file-name {
      display: flex;
      flex-wrap: nowrap;
      color: white;
      max-width: var(--file-image-name-max-width);

      & *:nth-child(2) {
        margin-left: -0.03rem;
      }
    }

    &__control-group {
      display: flex;
      align-items: center;
      gap: 10px;

    }

    &__control {
      &:hover {
        :deep(.q-icon) {
          color: rgb(var(--v-theme-on-primary)) !important;
        }
      }
    }
  }
</style>
