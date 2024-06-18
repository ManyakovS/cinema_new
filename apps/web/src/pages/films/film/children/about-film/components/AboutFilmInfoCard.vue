<template>
  <div class="about-film__info-card">
    <h5 class="text-h5">{{ film.title }}</h5>

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

    <div class="flex mt-5">
      <BaseIconWithText
        :label="`Жанры: ${film.genres.map((g) => g.name)}`"
        icon="mdi-filmstrip-box"
      />
    </div>

    <div class="flex mt-5 justify-between items-center">
      <div class="flex gap-x-2">
        <v-avatar size="50" color="surface-variant">
          <v-img
            alt="John"
            :src="getImagePath(film.actors.find((a) => a.position === 'Режиссер')?.actor.image.path)"
          />
        </v-avatar>
  
        <div class="d-flex flex-column align-start justify-end">
          <div class="text-base font-bold break-word text-center">
            {{ film.actors.find((a) => a.position === 'Режиссер')?.actor.name }}
          </div>
  
          <div class="text-caption text-center">
            Режиссер
          </div>
        </div>
      </div>

      <BaseButton label="Трейлер" @click="$router.push({ name: 'home' })" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Film } from '@/@types/schema'
  import { formatTimeDuration } from '@/utils/functions/get-formated-time'
  import { getImagePath } from '@/utils/functions/get-image-path'

  interface Props {
    film: Film
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .about-film__info-card {
    position: absolute;
    width: calc(100vw - 32px);
    top: calc(26% - 200px / 2);
    left: calc(50% - calc(100vw - 32px) / 2);
    box-shadow: 5px 1px 20px 2px rgba(var(--v-theme-on-background), 0.1);

    background-color: rgba(var(--v-theme-background), 0.85);
    border-radius: 16px;
    padding: 16px;
  }
</style>
