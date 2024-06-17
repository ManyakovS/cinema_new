<template>
  <div class="d-flex flex-column items-center w-[34px]">
    <v-btn
      size="34px"
      v-bind="{ ...icon[ticket.status] }"
      variant="text"
      class="text-xl"
    />
    <p class="font-semibold text-sm">{{ ticket.code }}</p>
  </div>
</template>

<script setup lang="ts">
  import { TicketStatus, Ticket } from '@/@types/schema'

  interface Props {
    ticket: Ticket
  }

  defineProps<Props>()

  const icon = {
    [TicketStatus.AVAILABLE]: {
      icon: 'mdi-sofa-single-outline',
      color: 'primary',
    },
    [TicketStatus.SELECTED]: {
      icon: 'mdi-sofa-single',
      color: 'primary',
    },
    [TicketStatus.BOOKED]: {
      icon: 'mdi-sofa-single',
      color: 'grey',
    },
    [TicketStatus.RESERVATED]: {
      icon: 'mdi-sofa-single',
      color: 'grey',
    },
  }
</script>

<style scoped></style>
