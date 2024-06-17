<template>
  <v-window-item :value="itemPage">
    <v-container fluid>
      <template v-for="film in films" :key="film.id">
        <TicketsFilmCard v-if="film" :film="film">
          <template #action>
            <div class="d-flex justify-between">
              <BaseButton class="w-full" label="Завершено" disabled />
            </div>
          </template>
        </TicketsFilmCard>
      </template>
    </v-container>
  </v-window-item>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'
  // Types
  import {
    GetFilmsByUserParamsDTO,
    TicketStatus,
    UserFilmResource,
  } from '@/@types/schema'
  import { TickedPageEnum } from '../model/tikets-types'

  // Store
  import { useFilmStore } from '@/stores/films'
  import { useUserStore } from '@/stores/user'

  interface Props {
    itemPage: TickedPageEnum
  }

  defineProps<Props>()

  const { getFilmsByUser } = useFilmStore()
  const { user } = storeToRefs(useUserStore())

  const filter = ref<GetFilmsByUserParamsDTO | null>({
    userId: user.value?.id,
    ticketStatus: TicketStatus.FINISHED,
  })
  const films = ref<UserFilmResource[]>([])

  fetchData()
  async function fetchData() {
    try {
      films.value = await getFilmsByUser(filter.value)
    } catch {}
  }
</script>

<style scoped></style>
