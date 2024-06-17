<template>
  <BaseRouterLink class="d-flex" :to="to">
    <VBtn class="profile-route-button" :prepend-icon="icon" @click="callback">
      <template #prepend>
        <div class="profile-route-button__icon d-flex">
          <v-icon :icon="icon" :color="iconColor" size="30" />
        </div>
      </template>

      <template #default>
        <div class="profile-route-button__content">
          <div
            v-if="props.text"
            class="ml-1 profile-route-button__content__text"
          >
            {{ text }}
          </div>

          <div
            v-if="props.secondText"
            class="profile-route-button__content__second-text"
          >
            {{ secondText }}
          </div>
        </div>
      </template>

      <template #append>
        <div v-if="props.to" class="profile-route-button__route-icon">
          <v-icon icon="mdi-chevron-right" size="34" />
        </div>
      </template>
    </VBtn>
  </BaseRouterLink>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import { RouterLink } from 'vue-router'

  export interface ProfileRouteButtonProps {
    icon: string
    iconColor?: string
    text: string
    secondText?: string
    to?: RouteLocationRaw
    callback?: () => void
  }

  const props = withDefaults(defineProps<ProfileRouteButtonProps>(), {
    iconColor: 'primary',
  })
</script>

<style scoped lang="scss">
  .profile-route-button {
    padding: 6px;
    display: flex;
    padding: 0;
    flex: 1 0 auto;

    &__content {
      flex: 1 0 auto;
      display: flex;
      justify-content: space-between;

      &__text {
        font-weight: 500;
      }
    }
  }

  :deep(.v-btn__content) {
    flex: 1 0 auto;
  }
</style>
