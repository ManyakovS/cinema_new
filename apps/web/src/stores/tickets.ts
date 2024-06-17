import { defineStore } from "pinia";
/* import { sessionsGetRequest, sessionGetRequest } from '@/@types/schema' */

// Types
import {
  ticketBook,
  ticketBuy,
  ticketCancelBook,
  ticketGetRequest,
  ticketsGetRequest,
  ticketsUserFilmGetRequest,
  type BookTicketsDTO,
  type TicketResource,
} from "@/@types/schema";

export const useTicketStore = defineStore("ticketStore", () => {
  const tickets = ref<TicketResource[]>([]);
  const ticketsUser = ref<TicketResource[]>([]);
  const ticket = ref<TicketResource | null>();

  const getTicket = async (ticketId: number, forceFetch = false) => {
    if (ticketId !== ticket?.value?.id || forceFetch) {
      console.log(ticketId);
      const { data } = await ticketGetRequest(ticketId);
      ticket.value = data;
      return data;
    } else return ticket;
  };

  const getTickets = async (ticketIds: number[]) => {
    const { data } = await ticketsGetRequest(ticketIds);

    tickets.value = data;
    return data;
  };

  const getUserTickets = async (params: { userId: number; filmId: number }) => {
    const { data } = await ticketsUserFilmGetRequest({ ...params });

    ticketsUser.value = data;
    return data;
  };

  const bookTicket = async (body: BookTicketsDTO) => {
    const { data } = await ticketBook(body);
    tickets.value = data;
  };

  const cancelBookTicket = async (body: BookTicketsDTO) => {
    const { data } = await ticketCancelBook(body);
    tickets.value = data;
  };

  const buyTicket = async (body: BookTicketsDTO) => {
    const { data } = await ticketBuy(body);
    tickets.value = data;
  };

  return {
    tickets,
    ticketsUser,
    ticket,
    getTicket,
    getTickets,
    bookTicket,
    cancelBookTicket,
    buyTicket,
    getUserTickets,
  };
});
