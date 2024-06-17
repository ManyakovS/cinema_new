<template>
  <div class="app-nav-mini d-flex justify-evenly w-full">
    <AppNavMiniItem
      v-for="(item, i) in list"
      :key="i"
      v-bind="item"
      class="app-nav-mini__item"
    />
  </div>
</template>

<script setup lang="ts">
  // Core
  import { computed } from 'vue'

  // Types
  import type { AppNavListItem } from '../model/types'

  const list = computed((): AppNavListItem[] => {
    const menu: AppNavListItem[] = []

    menu.push({
      icon: 'mdi-home',
      text: 'Главная',
      to: '/home',
    })

    menu.push({
      icon: 'mdi-movie-open',
      text: 'Фильмы',
      to: '/films',
    })

    menu.push({
      icon: 'mdi-ticket-confirmation',
      text: 'Билеты',
      to: '/tickets',
    })

    menu.push({
      icon: 'mdi-account',
      text: 'Профиль',
      to: '/profile',
    })

    return menu
  })
</script>

<style lang="scss" scoped>
  .app-nav-mini {
    gap: 4px;

    &__item {
      flex: 1;
    }
  }
</style>
