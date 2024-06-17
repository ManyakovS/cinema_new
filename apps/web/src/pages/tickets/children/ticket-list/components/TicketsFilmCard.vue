<template>
  <div class="tickets__film_card pa-4">
    <BaseFilmImage class="tickets__film_card__img" :img="film.images[0].path" />
    <div
      class="tickets__film_card__content w-full d-flex flex-column justify-between pl-4"
    >
      <div>
        <div class="tickets__film_card__content-name text-h5">
          {{ film.title }}
        </div>
        <div class="tickets__film_card__content-date mt-2">
          <BaseIconWithText
            :label="getFormatedTime(film.dateStart)"
            icon="mdi-calendar-month"
          />
        </div>
      </div>

      <div class="tickets__film_card__action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Types
  import { UserFilmResource } from '@/@types/schema'

  // Utils
  import { getFormatedTime } from '@/utils/functions/get-formated-time'

  interface Props {
    film: UserFilmResource
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .tickets__film_card {
    display: flex;
    background-color: rgba(grey, 0.05);
    border-radius: 16px;

    &__img {
      --height: 140px;
      width: calc(var(--height) / 1.4);
      height: var(--height);
      flex: none !important;
    }
  }
</style>
