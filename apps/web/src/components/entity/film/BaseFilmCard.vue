<template>
  <BaseRouterLink :to="to">
    <div ref="baseFilmCard" class="base-film-card flex flex-column h-full">
      <div class="base-film-card__img">
        <BaseFilmImage :img="film.images[0]?.path" />
      </div>

      <div class="base-film-card__title font-semibold mt-1" :class="titleSize">
        {{ film.title }}
      </div>
      <div :class="genresSize" v-if="film.genres" class="mb-2">
        {{ film.genres?.map((genre) => genre.name).join(', ') }}
      </div>

      <BaseButton
        v-if="to"
        variant="outlined"
        class="mt-auto w-full"
        :label="buttonLabel"
        :to="to"
      />
    </div>
  </BaseRouterLink>
</template>

<script setup lang="ts">
  // Types
  import { type RouteLocationRaw } from 'vue-router'
  import type { FilmShortResource } from '@/@types/schema'

  interface Props {
    film: FilmShortResource
    titleSize: 'text-base' | 'text-sm'
    genresSize: 'text-xs' | 'text-2xs'
    to: RouteLocationRaw
    buttonLabel: string
  }

  withDefaults(defineProps<Props>(), {
    titleSize: 'text-sm',
    genresSize: 'text-2xs',
    buttonLabel: 'Купить',
  })

</script>

<style scoped lang="scss">
  .base-film-card {
    &__img {
      box-shadow: 5px 1px 20px 2px rgba(var(--v-theme-on-background), 0.1);
      border-radius: 16px;
      width: 100%;
      
      .v-responsive  {
        aspect-ratio: 3 / 4;
      }
    }
  }

  .text-2xs {
    font-size: 0.625rem; /* 10px */
    line-height: 0.875rem; /* 12px */
  }
</style>
