<template>
  <div class="d-flex flex-column gap-4">
    <ProfileRouteButton v-for="(btn, i) in buttons" :key="i" v-bind="btn" />
  </div>
</template>

<script setup lang="ts">
  // Types
  import type { ProfileRouteButtonProps } from '../components/ProfileRouteButton.vue'

  // Utils
  import { getCurrentPath } from '@/utils/functions/get-current-path'

  // Store
  import { useUserStore } from '@/stores/user'

  const { logout } = useUserStore()
  const $router = useRouter()

  const handleLogout = async () => {
    await logout()
    $router.push({ name: 'login', query: { redirect: getCurrentPath() } })
  }

  const buttons = computed<ProfileRouteButtonProps[]>(() => {
    return [
      {
        icon: 'mdi-account-outline',
        text: 'Домой',
        secondText: 'бла бла',
        to: { name: 'home' },
      },
      {
        icon: 'mdi-account-outline',
        text: 'Домой',
        secondText: 'бла бла',
        to: { name: 'home' },
      },
      {
        icon: 'mdi-exit-run',
        iconColor: 'error',
        text: 'Выйти',
        callback: () => handleLogout(),
      },
    ]
  })
</script>

<style scoped></style>
