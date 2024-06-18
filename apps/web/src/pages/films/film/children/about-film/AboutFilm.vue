<template>
  <div v-if="film" class="about-film d-flex flex-column h-full">
    <div class="about-film__img" :style="backgroundImage" />

    <AboutFilmInfoCard name="Test" :film="film" />

    <ButtonBack :to="{ name: 'home' }" class="z-[10000] !left-[70px]" />
    <BaseShareButton class="!right-[50px] z-[10000]" />

    <div class="d-flex flex-column mt-[280px]">

      <div>
        <div>
          <b class="text-xl mb-2 block">Описание</b>

          <p class="text-gray text-lg">
            {{film.description}}
          </p>
        </div>

        <div class="mt-5">
          <b class="text-xl mb-2 block">Актерский состав</b>

          <div class="block pb-20">
            <AboutFilmCardList :actors="film.actors" />
          </div>
        </div>
      </div>
      <BaseFixedButton label="Купить" :to="{ name: 'film-tickets' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useFilmStore } from "@/stores/films";
import { getImagePath } from "@/utils/functions/get-image-path";

const { film } = storeToRefs(useFilmStore());

const backgroundImage = computed(() => {
  if (film.value) {
    return `background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(var(--v-theme-background), 1) 100% ), url(${getImagePath(film.value.images[0].path)})`;
  } else return "";
});
</script>

<style scoped lang="scss">
.about-film {
  &__img {
    height: 30vh;
    margin: -16px;
    margin-bottom: 0;

    position: relative;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 80%; /* 40% от высоты контейнера */
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(var(--v-theme-background), 1)
      );
    }
  }
}
</style>
