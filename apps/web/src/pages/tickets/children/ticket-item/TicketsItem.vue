<template>
  <h5 class="text-h5 text-center font-semibold mb-2">Мои билеты</h5>

  <div v-for="(tickets, index) in ticketGroups" :key="index">
    <div class="text-h6 mt-4 mb-1 font-semibold">{{ index }}</div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="ticket in tickets" :key="ticket.id">
        <v-expansion-panel-title>
          <div class="d-flex w-full justify-between">
            <span class="text-subtitle-1 font-semibold">
              Ряд: {{ ticket.code[0] }}, место: {{ ticket.code.slice(1) }}
            </span>
            <span
              class="text-subtitle-1 font-semibold"
              :style="getTicketLabelAndColor(ticket).color"
            >
              {{ getTicketLabelAndColor(ticket).label }}
            </span>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <DetailsFilmAboutFilm
            class="mt-[40px]"
            :film="film"
            :tickets="[ticket]"
          />

          <div class="details-film__price mt-[4px]">
            <h5 class="text-h6 font-semibold mt-2">Детали</h5>
            <VDivider class="my-4" color="primary" />
            <PriceWithTitle
              class="my-4"
              label="Стоимость"
              :cost="`${ticket.cost} ₽`"
            />
            <VDivider class="my-4" color="primary" />

            <PriceWithTitle class="my-4" label="Статус">
              <template #item>
                <span
                  class="text-subtitle-1 font-semibold"
                  :style="getTicketLabelAndColor(ticket).color"
                >
                  {{ getTicketLabelAndColor(ticket).label }}
                </span>
              </template>
            </PriceWithTitle>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'

  // Utils
  import { sum } from 'lodash'
  import { useNotify } from '@/utils/hooks/use-notify'
  import { groupBy } from 'lodash'
  import { getFormatedTime } from '@/utils/functions/get-formated-time'

  // Types
  import { Ticket, TicketStatus } from '@/@types/schema'

  // Store
  import { useUserStore } from '@/stores/user'
  import { useTicketStore } from '@/stores/tickets'
  import { useFilmStore } from '@/stores/films'

  const { getUserTickets } = useTicketStore()
  const { ticketsUser } = storeToRefs(useTicketStore())

  const { film } = storeToRefs(useFilmStore())
  const { getFilm } = useFilmStore()

  const { user } = storeToRefs(useUserStore())

  const { notifyError } = useNotify()

  const $route = useRoute()

  const ticketGroups = computed(() => {
    return groupBy(ticketsUser.value, (ticket) =>
      getFormatedTime(ticket.session.sessionTimeStart, 'dd.MM.yyyy HH:mm'),
    )
  })

  fetchData()
  async function fetchData() {
    await getUserTickets({
      userId: +$route.params?.userId,
      filmId: +$route.params?.filmId,
    }).catch(notifyError)

    await getFilm(+$route.params?.filmId)
  }

  function getTicketLabelAndColor(ticket: Ticket) {
    return {
      color:
        ticket.status === TicketStatus.BOOKED
          ? 'color: rgb(var(--v-theme-primary))'
          : ticket.status === TicketStatus.CANCELED
            ? 'color: #AFAFAF'
            : 'color: rgb(var(--v-theme-primary-lighten-3))',

      label:
        ticket.status === TicketStatus.BOOKED
          ? 'Оплачено'
          : ticket.status === TicketStatus.CANCELED
            ? 'Отменено'
            : 'Завершено',
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
        top: -22px;
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
