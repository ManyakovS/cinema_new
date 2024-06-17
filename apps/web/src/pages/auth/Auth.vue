<template>
  <div class="d-flex flex-column h-full">
    <AuthHeader :title="headerTitle" />

    <router-view />
  </div>
</template>

<script setup lang="ts">
  const $route = useRoute()
  const headerTitle = computed(() => {
    switch ($route.name) {
    case 'register':
    case 'register.verify-email':
    case 'register.verify-code':
    case 'register.main.form':
      return 'Регистрация'

    case 'restore':
      return 'Восстановить пароль'

    case 'restore-password':
      return 'Восстановить пароль'

    default:
      return 'Авторизация'
    }
  })
</script>
