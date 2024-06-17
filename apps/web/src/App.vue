<template>
  <VApp class="bg-color">
    <ReloadPWA />
    <v-layout class="page-layout">
      <AppHeader v-if="user && showHeader" />

      <VMain class="pa-4">
        <router-view v-slot="{ Component, route }">
          <Transition name="slide-fade">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>
      </VMain>

      <AppFooter v-if="user" />
    </v-layout>
  </VApp>
</template>

<script lang="ts" setup>
  // Core
  import { storeToRefs } from 'pinia'

  // Store
  import { useUserStore } from './stores/user'

  const { user } = storeToRefs(useUserStore())

  const $route = useRoute()

  const showHeader = computed(() => {
    const name = $route?.name?.toString()

    return !name?.includes('profile')
  })
</script>

<style lang="scss" scoped>
  .page-layout {
    display: grid;
    grid-template-rows: auto 66px;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease-out;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    position: absolute;
    /* transform: translateX(-300px); */
  }
</style>
