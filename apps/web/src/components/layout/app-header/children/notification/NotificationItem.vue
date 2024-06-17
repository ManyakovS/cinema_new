<template>
  <v-list-item
    class="notification-card"
    @mouseenter="handleMouseEnter(notification)"
    @mouseleave="resetHoverTimer"
    :class="{
      unread: !notification.read,
    }"
  >
    <v-list-item-content>
      <v-list-item-title
        class="font-weight-medium"
        v-html="notification.content"
      />

      <v-list-item-subtitle class="mt-2">
        {{ getFormatedTime(notification.createdAt, 'dd.MM.yyyy HH:mm') }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup lang="ts">
  // Utils
  import { getFormatedTime } from '@/utils/functions/get-formated-time'

  // Types
  import { Notification } from '@/@types/schema'

  interface Props {
    notification: Notification
  }

  defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'read', value: number): void
  }>()

  let hoverTimer = null

  const handleMouseEnter = (notification) => {
    if (notification.read) return
    hoverTimer = setTimeout(() => {
      $emit('read', notification.id)
    }, 300)
  }

  const resetHoverTimer = () => {
    clearTimeout(hoverTimer)
  }
</script>

<style scoped lang="scss">
  .notification-card {
    padding: 12px 8px;
    margin: 20px 16px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Небольшой тень для выделения */
    background-color: #f9f9f9; /* Серый фон карточки */

    &.unread {
      background-color: rgba(
        var(--v-theme-primary-lighten-3),
        0.2
      ); /* Серый фон карточки */
    }
  }

  .v-list-item-title {
    white-space: normal;
    hyphens: none;
  }
  .notification-card .font-weight-medium {
    font-weight: 500; /* Adjust the weight as needed */
  }

  .notification-card .v-list-item-subtitle {
    text-align: end;
  }
</style>
