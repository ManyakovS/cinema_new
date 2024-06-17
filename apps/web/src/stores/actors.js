import { defineStore } from "pinia";
import { actorsRequest } from "@/@types/schema";
export const useActorStore = defineStore("actorsStore", () => {
    const actors = ref();
    const getActors = async (filter) => {
        const { data } = await actorsRequest(filter);
        actors.value = data;
    };
    return {
        actors,
        getActors,
    };
});
//# sourceMappingURL=actors.js.map