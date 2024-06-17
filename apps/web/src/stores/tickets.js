import { defineStore } from "pinia";
import { ticketBook, ticketBuy, ticketCancelBook, ticketGetRequest, ticketsGetRequest, ticketsUserFilmGetRequest, } from "@/@types/schema";
export const useTicketStore = defineStore("ticketStore", () => {
    const tickets = ref([]);
    const ticketsUser = ref([]);
    const ticket = ref();
    const getTicket = async (ticketId, forceFetch = false) => {
        if (ticketId !== ticket?.value?.id || forceFetch) {
            console.log(ticketId);
            const { data } = await ticketGetRequest(ticketId);
            ticket.value = data;
            return data;
        }
        else
            return ticket;
    };
    const getTickets = async (ticketIds) => {
        const { data } = await ticketsGetRequest(ticketIds);
        tickets.value = data;
        return data;
    };
    const getUserTickets = async (params) => {
        const { data } = await ticketsUserFilmGetRequest({ ...params });
        ticketsUser.value = data;
        return data;
    };
    const bookTicket = async (body) => {
        const { data } = await ticketBook(body);
        tickets.value = data;
    };
    const cancelBookTicket = async (body) => {
        const { data } = await ticketCancelBook(body);
        tickets.value = data;
    };
    const buyTicket = async (body) => {
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
//# sourceMappingURL=tickets.js.map