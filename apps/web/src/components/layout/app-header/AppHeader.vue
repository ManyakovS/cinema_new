<template>
  <v-app-bar app :class="{ active: drawer }">
    <v-toolbar-title>
      <router-link :to="{ name: 'profile' }">
        <UserCard :user="user" size="medium" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="drawer = !drawer">
      <v-badge color="red" :content="unreadCount" v-if="unreadCount">
        <v-icon>mdi-bell</v-icon>
      </v-badge>

      <v-icon v-else>mdi-bell</v-icon>
    </v-btn>
  </v-app-bar>
  <NotificationBar v-if="drawer" v-model:drawer="drawer" />
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'

  // Store
  import { useNotificationStore } from '@/stores/notifications'
  import { useUserStore } from '@/stores/user'

  // Notification
  import { wssNotification } from '@/web-socket/modules/wss-notifications'
  wssNotification()

  const { user } = storeToRefs(useUserStore())
  const { notifications } = storeToRefs(useNotificationStore())

  const unreadCount = computed(
    () => notifications.value.filter((n) => !n.read).length,
  )

  const drawer = ref(false)
</script>

<style scoped lang="scss">
  .v-toolbar {
    width: 100vw !important;
    box-shadow: none !important;
    background: rgba(var(--v-theme-on-primary), 0);

    transition: all 0.15s ease-in;
    &.active {
      background: rgba(var(--v-theme-on-primary), 1);
    }
  }
</style>
