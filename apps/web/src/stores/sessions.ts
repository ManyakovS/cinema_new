import { defineStore } from "pinia";
import { sessionsGetRequest, sessionGetRequest } from "@/@types/schema";

// Types
import type {
  SessionResource,
  SessionShortResource,
  GetSessionsParamsDTO,
} from "@/@types/schema";

export const useSessionStore = defineStore("sessionsStore", () => {
  const sessions = ref<SessionShortResource[] | null>();
  const sessionsByDate = ref<SessionShortResource[] | null>();

  const session = ref<SessionResource | null>();

  const getSessions = async (filter?: GetSessionsParamsDTO) => {
    const { data } = await sessionsGetRequest(filter);

    sessions.value = data;
  };

  const getSessionsByDate = async (filter?: GetSessionsParamsDTO) => {
    const { data } = await sessionsGetRequest(filter);

    sessionsByDate.value = data;
  };

  const getSession = async (sessionId: number) => {
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
