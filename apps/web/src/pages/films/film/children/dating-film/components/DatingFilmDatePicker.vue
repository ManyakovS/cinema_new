<template>
  <v-sheet class="dating-film__date-picker" elevation="8">
    <BaseSlideGroup
      class="h-[84px]"
      :slides="uniqueDatesSessions"
      v-model:selected="_session"
    >
      <template #default="{ toggle, item, isSelected }">
        <keep-alive>
          <v-card
            class="dating-film__date-picker__item w-[48px] py-3 d-flex flex-column items-center justify-center text-xl"
            :class="{ 'dating-film__date-picker__item__selected': isSelected }"
            @click="toggle"
          >
            <p class="text-primary font-bold uppercase">
              {{ format(item.sessionTimeStart, 'd') }}
            </p>
            <p class="text-primary">{{ formatDate(item.sessionTimeStart) }}</p>
          </v-card>
        </keep-alive>
      </template>
    </BaseSlideGroup>
  </v-sheet>
</template>

<script setup lang="ts">
  // Types
  import { SessionShortResource } from '@/@types/schema'

  // Utils
  import { uniqBy, isEqual } from 'lodash'
  import { format, closestTo } from 'date-fns'
  import { ru } from 'date-fns/locale'

  interface Props {
    sessions: SessionShortResource[]
    session: SessionShortResource
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:session', value: SessionShortResource): void
  }>()

  const _session = computed({
    get() {
      if (props.session) return props.session
      else {
        const session = findClosestDate(
          uniqueDatesSessions.value,
          new Date(),
        )?.[0]
        $emit('update:session', session)

        return session
      }
    },
    set(session: SessionShortResource) {
      $emit('update:session', session)
    },
  })

  const uniqueDatesSessions = computed(() => {
    console.log(1)
    return uniqueByDate(props.sessions, 'sessionTimeStart')
  })

  function formatDate(dateString: string) {
    const formatDate = format(new Date(dateString), 'EEE', {
      locale: ru,
    }).substring(0, 2)
    return `${formatDate[0].toUpperCase() + formatDate[1]}`
  }

  function findClosestDate(array, targetDate) {
    const dates = array.map((obj) => new Date(obj.sessionTimeStart))
    const closestDate = closestTo(new Date(targetDate), dates)
    return array.filter((obj) =>
      isEqual(new Date(obj.sessionTimeStart), new Date(closestDate)),
    )
  }

  function uniqueByDate(array, key: string) {
    return uniqBy(array, (session) => session[key].substring(0, 10))
  }
</script>

<style scoped lang="scss">
  .dating-film__date-picker {
    box-shadow: none !important;
    background-color: transparent;
    width: 100%;
    max-width: calc(100vw + 32px);
    border-radius: 16px;
    margin: 0 -16px;

    &__item {
      background-color: transparent;
      box-shadow: none !important;
      border-radius: 0;
      height: 72px;
      transition: all 0.1s ease-in;
      margin: 0 2px;

      &__selected {
        background-color: rgba(var(--v-theme-primary));
        transform: translateY(12px);
        border-radius: 8px;

        & > * {
          color: white !important;
        }
      }
    }

    :deep(.v-slide-group__next),
    :deep(.v-slide-group__prev) {
      height: 72px;
      background-color: rgba(var(--v-theme-primary-lighten-2), 0.4);
      flex: 0 1 24px;
      min-width: 24px;
      color: rgb(var(--v-theme-primary));
    }

    :deep(.v-slide-group__next) {
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    :deep(.v-slide-group__prev) {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }

    :deep(.v-slide-group__next--disabled),
    :deep(.v-slide-group__prev--disabled) {
      opacity: 1;
    }

    :deep(.v-slide-group__container) {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 72px;
      }
    }
  }
</style>
