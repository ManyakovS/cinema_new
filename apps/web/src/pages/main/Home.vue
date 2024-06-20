<template>
  <div class="d-flex flex-column home">
    <div class="home__recomentadions mt-20">
      <div v-if="films" class="grid grid-cols-2 gap-4">
        <BaseFilmCard
          v-for="film in films"
          :key="film.id"
          :film="film"
          :to="{ name: 'film-about', params: { id: film.id } }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { useFilmStore } from '@/stores/films'

  const { getFilms } = useFilmStore()
  const { films } = storeToRefs(useFilmStore())

  fetch()
  async function fetch() {
    getFilms({
      isActive: true,
    })
  }
</script>
