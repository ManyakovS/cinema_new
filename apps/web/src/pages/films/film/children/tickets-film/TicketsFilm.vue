<template>
  <div class="d-flex flex-column h-full gap-8" v-if="sessions">
    <ButtonBack :to="{ name: 'film-about' }" />
    <h5 class="text-h5 text-center font-semibold">Выберите места</h5>

    <div class="d-flex flex-column h-full justify-between">
      <div class="d-flex flex-column h-full gap-4">
        <TicketsFilmHint />

        <DatingFilmDatePicker
          :sessions="sessions"
          :session="selectedDateSession"
          @update:session="handleSelectSessionDate"
        />

        <DatingFilmTimePicker
          :sessions="sessionsByDate"
          v-model:session="session"
        />
      </div>

      <TicketsFilmSeatsContainer
        v-if="session"
        class="mb-[88px]"
        :session="session"
        v-model:selected="tickets"
      />
    </div>

    <TicketsFilmFooter :tickets="tickets" />
  </div>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'
  import {format } from 'date-fns'

  // Types
  import { SessionShortResource, SessionStatus, Ticket } from '@/@types/schema'

  // Store
  import { useSessionStore } from '@/stores/sessions'

  const { getSessions, getSessionsByDate, getSession } = useSessionStore()
  const { sessions, sessionsByDate, session } = storeToRefs(useSessionStore())

  const $route = useRoute()

  const selectedDateSession = ref()

  const filter = ref({
    filmId: +$route.params.id,
    status: SessionStatus.AVAILABLE,
    sessionTimeStart: format(new Date(), 'yyyy-MM-dd HH:mm')
  })

  const tickets = ref<Ticket[]>([])

  fetchData()
  async function fetchData() {
    await getSessions(filter.value)
  }

  async function handleSelectSessionDate(_session: SessionShortResource) {
    if (_session) {
      await getSessionsByDate({
        ...filter.value,
        sessionTimeStart: _session.sessionTimeStart,
      })
      getSession(sessionsByDate.value?.[0]?.id)
    }
    selectedDateSession.value = _session
  }
</script>

<style scoped></style>
