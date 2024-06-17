<template>
  <BaseFixedButton label="Далее" :to="{ name: 'film-details' }">
    <template v-slot:default="{ label, to }">
      <div class="d-flex gap-8 items-center w-full">
        <div class="d-flex w-50 gap-4">
          <div>
            <p class="font-medium">Ваши места</p>
            <BaseTooltip
              location="top"
              :text="
                sortBy(tickets, 'code')
                  .map((t) => t.code)
                  .join(', ')
              "
            >
              <template v-slot:default="{ activator: { props }, click }">
                <span
                  @click="click"
                  v-bind="props"
                  class="font-bold text-primary"
                  >{{
                    sortBy(tickets, 'code')
                      .map((t) => t.code)
                      .slice(0, 2)
                      .join(', ')
                  }}</span
                >
              </template>
            </BaseTooltip>
          </div>

          <div>
            <p class="font-medium">Общая цена</p>
            <span class="font-bold text-primary"
              >{{ sum(tickets.map((t) => t.cost)) ?? 0 }} ₽</span
            >
          </div>
        </div>

        <BaseButton class="w-50" :label="label" @click="handleClick(to)" />
      </div>
    </template>
  </BaseFixedButton>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'

  // Types
  import type { Ticket } from '@/@types/schema'
  import { RouteLocationRaw } from 'vue-router'

  // Store
  import { useUserStore } from '@/stores/user'
  import { useTicketStore } from '@/stores/tickets'

  // Utils
  import { sum, sortBy } from 'lodash'
  import { setCookie } from '@/utils/functions/get-cookie'

  interface Props {
    tickets: Ticket[]
  }

  const props = defineProps<Props>()

  const $router = useRouter()

  const { user } = storeToRefs(useUserStore())
  const { bookTicket } = useTicketStore()

  async function handleClick(to: RouteLocationRaw) {
    try {
      await bookTicket({
        userId: user.value.id,
        ticketsIds: props.tickets.map((t) => t.id),
      })
      setCookie(
        `Tickets:user_${user.value.id}`,
        props.tickets.map((t) => t.id.toString()).join(','),
        60,
      )

      $router.push(to)
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style scoped></style>
