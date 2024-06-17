import { defineStore } from "pinia";
import { sessionsGetRequest, sessionGetRequest } from "@/@types/schema";
export const useSessionStore = defineStore("sessionsStore", () => {
    const sessions = ref();
    const sessionsByDate = ref();
    const session = ref();
    const getSessions = async (filter) => {
        const { data } = await sessionsGetRequest(filter);
        sessions.value = data;
    };
    const getSessionsByDate = async (filter) => {
        const { data } = await sessionsGetRequest(filter);
        sessionsByDate.value = data;
    };
    const getSession = async (sessionId) => {
        const { data } = await sessionGetRequest(sessionId);
        session.value = data;
        return data;
    };
    return {
        sessions,
        session,
        sessionsByDate,
        getSessions,
        getSession,
        getSessionsByDate,
    };
});
//# sourceMappingURL=sessions.js.map