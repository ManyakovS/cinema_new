<template>
  <div class="d-flex flex-column h-full items-center justify-center">
    <h5 class="text-h5 text-center font-semibold">
      Эта страница. ЗАГЛУШКА оплаты! Вас перенаправит на главную страницу через
      5 секунд и билет появиться в профиле
    </h5>
  </div>
</template>

<script setup lang="ts">
  const $router = useRouter()

  setTimeout(() => {
    $router.replace({ name: 'home' })
  }, 5000)
</script>

<style scoped></style>
