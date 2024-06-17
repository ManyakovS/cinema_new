<template>
  <v-sheet class="about-film__card-list" elevation="8">
    <VSlideGroup>
      <VSlideGroupItem
        v-for="actorPostion in actors"
        :key="actorPostion.actor.id"
      >
        <AboutFilmCardItem
          :name="actorPostion.actor.name"
          :position="actorPostion.position"
          :icon="actorPostion.actor.image.path"
        />
      </VSlideGroupItem>
    </VSlideGroup>
  </v-sheet>
</template>

<script setup lang="ts">
  import { ActorPosition } from '@/@types/schema'

  interface Props {
    actors: ActorPosition[]
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .about-film__card-list {
    box-shadow: none !important;
    background-color: transparent;
    margin: 0 -16px;
    width: 100%;
    max-width: calc(100vw);
    width: 100vw;
  }
</style>
