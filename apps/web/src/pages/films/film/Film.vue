<template>
  <router-view v-if="film" />
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useFilmStore } from '@/stores/films'

  import { useNotify } from '@/utils/hooks/use-notify'

  
  const { getFilm } = useFilmStore()
  const { film } = storeToRefs(useFilmStore())
  
  const { notifyError } = useNotify()
  const $route = useRoute()

  const fetchData = async () => {
    await getFilm(+$route.params.id).catch(notifyError)
  }
  fetchData()
</script>
