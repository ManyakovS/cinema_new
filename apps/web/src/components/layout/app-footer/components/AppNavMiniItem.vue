<template>
  <router-link :to="props.to">
    <div class="app-nav-item-mini d-flex flex-column items-center">
      <VIcon
        v-bind="{ ...props }"
        :color="
          isNavItemActive
            ? 'primary'
            : 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))'
        "
        :icon="isNavItemActive ? props.icon : `${props.icon}-outline`"
        size="large"
      />
      <span
        class="font-semibold"
        :style="
          isNavItemActive
            ? 'color: primary;'
            : 'color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));'
        "
        >{{ props.text }}</span
      >
    </div>
  </router-link>
</template>

<script lang="ts" setup>
  // Types
  import type { AppNavListItemEnum } from '../model/types'

  // Hooks
  import { useIsNavItemActive } from '@/utils/hooks/use-is-nav-item-active'

  interface AppNavListItem {
    text: string
    icon?: string
    color?: string
    to?: string
    childs?: AppNavListItem[]
    chip?: string
    label?: string
    type?: AppNavListItemEnum
    action?: (event: PointerEvent) => void
  }

  const props = defineProps<AppNavListItem>()

  const { isNavItemActive } = useIsNavItemActive(props)
</script>
