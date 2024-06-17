<template>
  <h5 class="text-h5 text-center font-semibold mb-2">Мои билеты</h5>

  <BaseSearchButton />

  <v-tabs v-model="tab" align-tabs="center" color="primary font-semibold">
    <v-tab v-for="_tab in tabs" :key="_tab.value" :value="_tab.value">
      {{ _tab.name }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <TicketsSoon :item-page="TickedPageEnum.SOON" />

    <TicketsDone :item-page="TickedPageEnum.DONE" />

    <TicketsCanceled :item-page="TickedPageEnum.CANCELED" />
  </v-window>
</template>

<script setup lang="ts">
  // Types
  import { TickedPageEnum } from './model/tikets-types'

  const $route = useRoute()
  const $router = useRouter()

  const tabs = [
    {
      name: 'Скоро',
      value: TickedPageEnum.SOON,
    },
    {
      name: 'Завершены',
      value: TickedPageEnum.DONE,
    },
    {
      name: 'Отменены',
      value: TickedPageEnum.CANCELED,
    },
  ]

  const tab = computed({
    get() {
      const { tab } = $route.query
      return (tab ?? TickedPageEnum.SOON) as TickedPageEnum
    },
    set(value: TickedPageEnum) {
      $router.replace({ name: 'tickets', query: { tab: value } })
      return value
    },
  })
</script>

<style scoped lang="scss">
  :deep(.v-container) {
    margin-top: 16px;
    padding: 0 !important;
  }

  :deep(.v-btn) {
    padding: 0 12px;
  }
</style>
