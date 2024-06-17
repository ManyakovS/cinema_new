<template>
  <div class="d-flex flex-column home">
    <div class="d-flex justify-between">
      <div>USER</div>

      <!-- <div>NOTIFICATIONS</div> -->
    </div>

    <div class="home__banner mt-10">BANNER</div>

    <div class="home__recomentadions mt-10">
      <h2>RECOMENDATIONS</h2>

      <div>FILM LIST</div>

      <div v-if="films" class="grid grid-cols-2 gap-4">
        <BaseFilmCard
          v-for="film in films"
          :key="film.id"
          :film="film"
          :to="{ name: 'film-about', params: { filmIdentifier: film.id } }"
        />
      </div>
    </div>

    <div class="home__upcoming mt-10">
      <h2>UPCOMING</h2>

      <div>FILM LIST</div>
    </div>

    <div class="mt-10">
      <h2>mb Other ?</h2>
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
    getFilms()
  }
</script>
