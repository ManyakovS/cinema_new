<template>
  <div>
    <FilmForm @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
  // Store
  import { useFilmStore } from '@/stores/films'

  // Types
  import { FullCreateFilm } from 'api/src/modules/film/dto/film.dto'

  // Hooks
  import { useNotify } from '@/utils/hooks/use-notify'

  const { notifyError } = useNotify()
  const { adminCreate } = useFilmStore()
  const $router = useRouter()

  async function handleSubmit(form: FullCreateFilm) {
    const film = await adminCreate(form).catch(notifyError)
    $router.push({ name: 'admin.film.edit', params: { id: film.id } })
  }
</script>

<style scoped></style>
