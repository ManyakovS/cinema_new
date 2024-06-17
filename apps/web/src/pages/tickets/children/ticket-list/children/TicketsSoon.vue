<template>
  <v-window-item :value="itemPage">
    <v-container fluid >
      <div class="flex flex-col gap-4">
        <template v-for="film in films" :key="film.id">
          <router-link
            :to="{
              name: 'tickets.user',
              params: { userId: user.id, filmId: film.id },
            }"
          >
            <TicketsFilmCard v-if="film" :film="film">
              <template #action>
                <div class="d-flex justify-between">
                  <BaseSwitch
                    class="flex-row-reverse gap-6"
                    :model-value="film.users[0].notification"
                    label="Уведомления"
                    @update:model-value="
                      (value) => handleUpdateNotification(value, film)
                    "
                    @click.stop=""
                  />
                </div>
              </template>
            </TicketsFilmCard>
          </router-link>
        </template>
      </div>
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
    ticketStatus: TicketStatus.BOOKED,
  })
  const films = ref<UserFilmResource[]>([])

  fetchData()
  async function fetchData() {
    try {
      films.value = await getFilmsByUser(filter.value)
    } catch {}
  }

  function handleUpdateNotification(value: boolean, film: UserFilmResource) {
    console.log(value)
    console.log(film)
  }
</script>

<style scoped></style>
