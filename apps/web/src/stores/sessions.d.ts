import type { SessionResource, SessionShortResource, GetSessionsParamsDTO } from "@/@types/schema";
export declare const useSessionStore: import("pinia").StoreDefinition<"sessionsStore", import("pinia")._UnwrapAll<Pick<{
    sessions: globalThis.Ref<SessionShortResource[]>;
    session: globalThis.Ref<SessionResource>;
    sessionsByDate: globalThis.Ref<SessionShortResource[]>;
    getSessions: (filter?: GetSessionsParamsDTO) => Promise<void>;
    getSession: (sessionId: number) => Promise<SessionResource>;
    getSessionsByDate: (filter?: GetSessionsParamsDTO) => Promise<void>;
}, "sessions" | "session" | "sessionsByDate">>, Pick<{
    sessions: globalThis.Ref<SessionShortResource[]>;
    session: globalThis.Ref<SessionResource>;
    sessionsByDate: globalThis.Ref<SessionShortResource[]>;
    getSessions: (filter?: GetSessionsParamsDTO) => Promise<void>;
    getSession: (sessionId: number) => Promise<SessionResource>;
    getSessionsByDate: (filter?: GetSessionsParamsDTO) => Promise<void>;
}, never>, Pick<{
    sessions: globalThis.Ref<SessionShortResource[]>;
    session: globalThis.Ref<SessionResource>;
    sessionsByDate: globalThis.Ref<SessionShortResource[]>;
    getSessions: (filter?: GetSessionsParamsDTO) => Promise<void>;
    getSession: (sessionId: number) => Promise<SessionResource>;
    getSessionsByDate: (filter?: GetSessionsParamsDTO) => Promise<void>;
}, "getSessions" | "getSession" | "getSessionsByDate">>;
//# sourceMappingURL=sessions.d.ts.map