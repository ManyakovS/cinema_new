<template>
  <div class="flex flex-col h-full w-full grod items-center justify-center">
    <h1 class="text-[150px] font-bold">404</h1>

    <p class="text-[30px] text-center font-medium mb-10">Страница не найдена</p>
    <BaseRouterLink :to="{ name: 'home'}">
      <BaseButton label="Вернуться на главную"/>
    </BaseRouterLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>