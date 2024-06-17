<template>
  <div class="d-flex flex-column home">
      <div class="d-flex justify-end mb-8">
        <router-link :to="{ name: 'admin.film.new' }">
          <BaseButton label="Добавить"/>
        </router-link>
      </div>
    
      <div v-if="films" class="grid grid-cols-2 gap-4">
        <BaseFilmCard
          v-for="film in films"
          :key="film.id"
          :film="film"
          :to="{ name: 'admin.film.edit', params: { id: film.id } }"
          buttonLabel="Редактировать"
        />
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