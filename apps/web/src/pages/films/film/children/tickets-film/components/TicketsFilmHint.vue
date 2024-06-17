<template>
  <div class="d-flex items-center justify-between tickets-film__hint">
    <div class="d-flex items-center gap-2">
      <v-avatar size="18" class="icon__available" />
      <p class="font-semibold text-sm">Доступны</p>
    </div>

    <div class="d-flex items-center gap-2">
      <v-avatar color="primary" size="18" />
      <p class="font-semibold text-sm">Выбраны</p>
    </div>

    <div class="d-flex items-center gap-2">
      <v-avatar color="grey" size="18" />
      <p class="font-semibold text-sm">Куплены</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .tickets-film__hint {
    max-width: calc(100vw - 32px);
  }

  :deep(.v-avatar) {
    border-radius: 6px;
  }

  .icon__available {
    border: 1.5px solid rgb(var(--v-theme-primary));
  }
</style>
