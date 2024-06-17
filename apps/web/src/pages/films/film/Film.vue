<template>
  <router-view v-if="film" />
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useFilmStore } from '@/stores/films'

  const { getFilm } = useFilmStore()
  const { film } = storeToRefs(useFilmStore())

  const $route = useRoute()

  const fetchData = async () => {
    try {
      await getFilm(+$route.params.filmIdentifier)
    } catch (error) {
      console.error(error)
    }
  }
  fetchData()
</script>
