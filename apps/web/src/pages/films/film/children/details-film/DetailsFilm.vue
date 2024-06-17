<template>
  <div class="d-flex flex-column h-full gap-8" v-if="tickets.length">
    <ButtonBack :to="{ name: 'film-tickets' }" color="black" />

    <div class="d-flex flex-column h-full gap-1 mt-[80px]">
      <DetailsFilmAboutFilm :film="film" :tickets="tickets" />
      <!-- Price -->
      <div class="details-film__price">
        <h5 class="text-h6 font-semibold mt-2">Детали</h5>
        <VDivider class="my-4" color="primary" />
        <PriceWithTitle
          class="my-4"
          label="Билеты"
          :cost="`${sum(tickets.map((t) => t.cost)) ?? 0} ₽`"
        />
        <PriceWithTitle class="my-4" label="Сервис" cost="0 ₽" />
        <VDivider class="my-4" color="primary" />

        <PriceWithTitle
          class="my-4"
          label="Всего"
          :cost="`${sum(tickets.map((t) => t.cost)) ?? 0} ₽`"
        />
      </div>
    </div>

    <BaseFixedButton
      label="Оплатить"
      @click="handleClick({ name: 'hardcode-back-payment' })"
    />
  </div>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'

  // Types
  import { RouteLocationRaw } from 'vue-router'

  // Utils
  import { sum } from 'lodash'
  import { getCookie, deleteCookie } from '@/utils/functions/get-cookie'
  import { useNotify } from '@/utils/hooks/use-notify'

  // Store
  import { useUserStore } from '@/stores/user'
  import { useTicketStore } from '@/stores/tickets'
  import { useFilmStore } from '@/stores/films'

  const { getTickets, buyTicket } = useTicketStore()
  const { tickets } = storeToRefs(useTicketStore())

  const { film } = storeToRefs(useFilmStore())
  const { user } = storeToRefs(useUserStore())

  const { notifyError } = useNotify()
  const $router = useRouter()

  fetchData()
  function fetchData() {
    const ticketIds = getCookie(`Tickets:user_${user.value.id}`)

    if (ticketIds)
      getTickets(ticketIds.split(',').map((t) => Number.parseInt(t))).catch(
        notifyError,
      )
    else {
      notifyError('Нет выбранных билетов, или вышло время оплаты')
      $router.push({ name: 'film-tickets' })
    }
  }

  async function handleClick(to: RouteLocationRaw) {
    try {
      await buyTicket({
        userId: user.value.id,
        ticketsIds: tickets.value.map((t) => t.id),
      })
      deleteCookie(`Tickets:user_${user.value.id}`)
      $router.push(to)
    } catch (error) {
      notifyError(error)
    }
  }
</script>

<style scoped lang="scss">
  .details-film {
    &__price {
      position: relative;
      margin-bottom: 80px;

      &::before,
      &::after {
        content: '';
        width: 40px;
        height: 40px;
        position: absolute;
        top: -20px;
        background-color: rgb(var(--v-theme-on-primary));
        border-radius: 100%;
      }

      &::before {
        left: -20px;
      }

      &::after {
        right: -20px;
      }
    }

    &__price {
      border-radius: 12px;
      background-color: rgba(var(--v-theme-surface-light), 0.6);
      padding: 20px;
    }
  }

  :deep(.v-divider) {
    border-top-color: rgb(var(--v-theme-primary));
  }
</style>
