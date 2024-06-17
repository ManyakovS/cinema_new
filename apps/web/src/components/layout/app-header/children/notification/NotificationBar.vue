<template>
  <v-navigation-drawer v-model="_drawer" app temporary location="right">
    <v-list>
      <NotificationItem
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
        @read="handleRead"
      />
    </v-list>
    <v-card-actions class="notification_footer">
      <v-spacer></v-spacer>
      <v-btn @click="markAllAsRead">
        <v-toolbar-title>Прочитать все</v-toolbar-title>
      </v-btn>
    </v-card-actions>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  // Core
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  // Store
  import { useNotificationStore } from '@/stores/notifications'
  import { useUserStore } from '@/stores/user'

  // Hooks
  import { useNotify } from '@/utils/hooks/use-notify'

  interface Props {
    drawer: boolean
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:drawer', value: boolean): void
  }>()

  const { fetchNotifications, readNotification, readAllNotification } =
    useNotificationStore()
  const { notifications } = storeToRefs(useNotificationStore())

  const { user } = storeToRefs(useUserStore())

  const { notifyError } = useNotify()

  const _drawer = computed({
    get() {
      return props.drawer
    },
    set(value: boolean) {
      $emit('update:drawer', value)
    },
  })

  fetchData()
  async function fetchData() {
    await fetchNotifications(user.value.id).catch(notifyError)
  }

  async function handleRead(notificationId: number) {
    await readNotification(notificationId)
  }

  async function markAllAsRead() {
    await readAllNotification(user.value.id)
  }
</script>

<style lang="scss" scoped>
  .v-navigation-drawer {
    width: 100vw !important;
    box-shadow: none !important;
    background: rgba(var(--v-theme-on-primary), 1);
  }

  .v-navigation-drawer__content {
    position: relative;
  }

  .v-list {
    max-height: calc(100% - 68px);
    overflow-y: scroll;
  }

  .v-navigation-drawer__content .notification_footer {
    width: 100%;
    padding: 16px;
    background: rgba(var(--v-theme-on-primary), 1);
    position: fixed;
    bottom: 0;
  }
</style>
