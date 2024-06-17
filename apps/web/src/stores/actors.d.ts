import type { Actor } from "@/@types/schema";
import { GetActorsParamsDTO } from "api/src/modules/actor/dto/actor.dto";
export declare const useActorStore: import("pinia").StoreDefinition<"actorsStore", import("pinia")._UnwrapAll<Pick<{
    actors: globalThis.Ref<Actor[]>;
    getActors: (filter?: GetActorsParamsDTO) => Promise<void>;
}, "actors">>, Pick<{
    actors: globalThis.Ref<Actor[]>;
    getActors: (filter?: GetActorsParamsDTO) => Promise<void>;
}, never>, Pick<{
    actors: globalThis.Ref<Actor[]>;
    getActors: (filter?: GetActorsParamsDTO) => Promise<void>;
}, "getActors">>;
//# sourceMappingURL=actors.d.ts.map