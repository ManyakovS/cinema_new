<template>
  <div class="details-film__details">
    <BaseImage
      class="details-film__details__img"
      :src="film.images?.[0].path"
      :aspect-ratio="1"
      cover
    />

    <h5 class="text-h5 text-center font-semibold mt-2">{{ film.title }}</h5>

    <div class="d-flex justify-between mt-5 gap-2">
      <BaseIconWithText
        :label="`Длительность: ${formatTimeDuration(film.duration)}`"
        icon="mdi-clock-time-four-outline"
      />

      <BaseIconWithText
        :label="`Режиссер: ${film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`"
        icon="mdi-account-outline"
      />
    </div>

    <div class="d-flex mt-5">
      <BaseIconWithText
        :label="`Жанры: ${film.genres.map((g) => g.name).join(', ')}`"
        icon="mdi-filmstrip-box"
      />
    </div>

    <div class="d-flex justify-between mt-4">
      <TextWithTitle
        :text="formattedDate(tickets[0].session.sessionTimeStart)"
        label="Дата"
      />
      <TextWithTitle
        :text="`${formattedTime(tickets[0].session.sessionTimeStart)} - ${formattedTime(tickets[0].session.sessionTimeEnd)}`"
        label="Время"
      />
    </div>

    <div class="d-flex justify-between mt-4">
      <!-- <TextWithTitle text="3" label="Зал" /> -->
      <TextWithTitle :text="tickets[0].code[0]" label="Ряд" />
      <TextWithTitle
        :text="tickets.map((t) => t.code).join(', ')"
        label="Места"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  // Types
  import { TicketResource, FilmResource } from '@/@types/schema'

  // Utils
  import {
    getFormatedTime,
    formatTimeDuration,
  } from '@/utils/functions/get-formated-time'

  interface Props {
    tickets: TicketResource[]
    film: FilmResource
  }

  defineProps<Props>()

  const formattedDate = (date: string) => getFormatedTime(date, 'd MMMM, yyyy')
  const formattedTime = (date: string) => getFormatedTime(date, 'HH.mm')
</script>

<style scoped lang="scss">
  .details-film {
    &__details {
      &__img {
        width: 100%;
        height: 120px;
        border-radius: 18px;
        margin: -60px auto auto;
      }
    }

    &__details {
      border-radius: 12px;
      background-color: rgba(var(--v-theme-surface-light), 0.6);
      padding: 20px;
    }
  }
</style>
