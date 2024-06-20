<template>
  <v-sheet class="dating-film__date-picker h-[44px]">
    <BaseSlideGroup :slides="sessions" v-model:selected="_session">
      <template #default="{ toggle, item, isSelected }">
        <keep-alive>
          <v-btn
            v-if="item"
            color="primary"
            :variant="isSelected ? 'flat' : 'outlined'"
            class="dating-film__date-picker__item"
            rounded="lg"
            @click="toggle"
          >
            <p class="font-semibold text-base">
              {{ format(item?.sessionTimeStart, 'HH:mm') }}
            </p>
          </v-btn>
        </keep-alive>
      </template>
    </BaseSlideGroup>
  </v-sheet>
</template>

<script setup lang="ts">
  // Types
  import { SessionShortResource } from '@/@types/schema'

  // Utils
  import { format } from 'date-fns'

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
      return props.session
    },
    set(session: SessionShortResource) {
      $emit('update:session', session)
    },
  })
</script>

<style scoped lang="scss">
  .dating-film__date-picker {
    box-shadow: none !important;
    background-color: transparent;
    width: 100%;
    max-width: calc(100vw + 32px);
    height: 44px;
    margin: 0 -16px;

    &__item {
      border-radius: 16px;
      margin: 0 6px;
      height: 40px !important;
      width: 94px !important;

      &:nth-child(1) {
        margin-left: 16px;
      }

      &:nth-last-child(n) {
        margin-right: 16px;
      }
    }
  }
</style>
