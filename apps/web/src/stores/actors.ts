import { defineStore } from "pinia";
import { actorsRequest } from "@/@types/schema";

// Types
import type { Actor } from "@/@types/schema";
import { GetActorsParamsDTO } from "api/src/modules/actor/dto/actor.dto";

export const useActorStore = defineStore("actorsStore", () => {
  const actors = ref<Actor[] | null>();

  const getActors = async (filter?: GetActorsParamsDTO) => {
    const { data } = await actorsRequest(filter);

    actors.value = data;
  };

  return {
    actors,
    getActors,
  };
});
