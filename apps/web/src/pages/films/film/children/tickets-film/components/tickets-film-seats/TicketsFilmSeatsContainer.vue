<template>
  <div class="tickets-film-seats-container">
    <template v-for="(ticket, index) in sessionScope.tickets" :key="ticket">
      <TicketsFilmSeatsItem :ticket="ticket" @click="handleSelect(ticket)" />

      <div class="w-[20px]" v-if="index === 3 || index % 8 === 3" />
    </template>
  </div>
</template>

<script setup lang="ts">
  // Types
  import { SessionResource, Ticket, TicketStatus } from '@/@types/schema'

  // Utils
  import { cloneDeep, remove } from 'lodash'

  interface Props {
    session: SessionResource
    selected: Ticket[]
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:selected', value: Ticket[]): void
  }>()

  const sessionScope = ref(cloneDeep(props.session))

  const _selected = computed<Ticket[]>({
    get() {
      return props.selected
    },
    set(selected: Ticket[]) {
      $emit('update:selected', selected)
    },
  })

  function handleSelect(ticket: Ticket) {
    const { tickets } = sessionScope.value

    tickets.splice(
      tickets.findIndex((c) => c.id === ticket.id),
      1,
      {
        ...ticket,
        status: ticketStatus[ticket.status],
      },
    )

    if (ticket.status === TicketStatus.AVAILABLE) _selected.value.push(ticket)
    else if (
      ticket.status === TicketStatus.SELECTED &&
      _selected.value.map((s) => s.id).includes(ticket.id)
    )
      _selected.value = _selected.value = remove(_selected.value, ticket)
  }

  const ticketStatus = {
    [TicketStatus.AVAILABLE]: TicketStatus.SELECTED,
    [TicketStatus.SELECTED]: TicketStatus.AVAILABLE,
    [TicketStatus.BOOKED]: TicketStatus.BOOKED,
    [TicketStatus.RESERVATED]: TicketStatus.RESERVATED,
  }

  watch(
    () => props.session.id,
    () => {
      sessionScope.value = cloneDeep(props.session)
    },
  )
</script>

<style scoped lang="scss">
  .tickets-film-seats-container {
    width: calc(100vw - 32px);

    display: grid;
    grid-template-columns: repeat(9, minmax(auto, 40px));
    grid-auto-rows: 48px;
    grid-auto-columns: auto;
    gap: 4px;
  }
</style>
