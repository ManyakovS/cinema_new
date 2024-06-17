import { request } from "@/utils/services/client";
export var FilmStatus;
(function (FilmStatus) {
    FilmStatus["AVAILABLE"] = "available";
    FilmStatus["COMPLETED"] = "completed";
})(FilmStatus || (FilmStatus = {}));
export const dataByFilmStatus = {
    [FilmStatus.AVAILABLE]: {
        label: "Доступен",
    },
    [FilmStatus.COMPLETED]: {
        label: "Завершен",
    },
};
export var SessionStatus;
(function (SessionStatus) {
    SessionStatus["AVAILABLE"] = "available";
    SessionStatus["COMPLETED"] = "completed";
})(SessionStatus || (SessionStatus = {}));
export const dataBySessionStatus = {
    [SessionStatus.AVAILABLE]: {
        label: "Доступен",
    },
    [SessionStatus.COMPLETED]: {
        label: "Завершен",
    },
};
export var TicketStatus;
(function (TicketStatus) {
    TicketStatus["AVAILABLE"] = "available";
    TicketStatus["SELECTED"] = "selected";
    TicketStatus["BOOKED"] = "booked";
    TicketStatus["CANCELED"] = "canceled";
    TicketStatus["RESERVATED"] = "reservated";
    TicketStatus["FINISHED"] = "finished";
})(TicketStatus || (TicketStatus = {}));
export const dataByTicketStatus = {
    [TicketStatus.AVAILABLE]: {
        label: "Доступен",
    },
    [TicketStatus.SELECTED]: {
        label: "Выбранный",
    },
    [TicketStatus.BOOKED]: {
        label: "Забронированный",
    },
    [TicketStatus.CANCELED]: {
        label: "Отменен",
    },
    [TicketStatus.RESERVATED]: {
        label: "Зарезервирован",
    },
    [TicketStatus.FINISHED]: {
        label: "Завершен",
    },
};
export var NotificationType;
(function (NotificationType) {
    NotificationType["TICKET_BOOKED"] = "ticket_book";
})(NotificationType || (NotificationType = {}));
export const filmsGetRequest = (params, options) => request("/films", { method: "GET", params, ...options });
export const filmGetRequest = (filmId, options) => request(`/films/id?filmId=${filmId}`, {
    method: "GET",
    ...options,
});
export const filmGetRequestByUser = (params, options) => request("/films/by-user", {
    method: "GET",
    params,
    ...options,
});
export const sessionsGetRequest = (params, options) => request("/session", {
    method: "GET",
    params,
    ...options,
});
export const sessionGetRequest = (sessionId, options) => request(`/session/id?sessionId=${sessionId}`, {
    method: "GET",
    ...options,
});
export const ticketGetRequest = (ticketId, options) => request(`/ticket/id?ticketId=${ticketId}`, {
    method: "GET",
    ...options,
});
export const ticketsGetRequest = (ticketIds, options) => request("/ticket/ids", {
    method: "GET",
    ...options,
    params: { ticketIds },
});
export const ticketsUserFilmGetRequest = (params, options) => request("/ticket/userId", {
    method: "GET",
    ...options,
    params,
});
export const ticketBook = (body, options) => request("/ticket/book", {
    body,
    method: "POST",
    ...options,
});
export const ticketCancelBook = (body, options) => request("/ticket/cancelBooked", {
    body,
    method: "POST",
    ...options,
});
export const ticketBuy = (body, options) => request("/ticket/buy", {
    body,
    method: "POST",
    ...options,
});
export const notificationsGetRequest = (userId, options) => request(`/notifications/id?userId=${userId}`, {
    method: "GET",
    ...options,
});
export const notificationsReadPutRequest = (body, options) => request("/notifications/read", {
    body,
    method: "PUT",
    ...options,
});
export const notificationsReadAllPutRequest = (body, options) => request("/notifications/readAll", {
    body,
    method: "PUT",
    ...options,
});
export const useChangeImageRequest = (body, options) => request("/users/change-image", {
    body,
    method: "PUT",
    ...options,
});
export const verifyEmailRequest = (body, options) => request("/auth/verifyEmail", { body, method: "POST", ...options });
export const verifyCodeRequest = (body, options) => request("/auth/verifyCode", { body, method: "POST", ...options });
export const registerRequest = (body, options) => request("/auth/register", { body, method: "POST", ...options });
export const loginRequest = (body, options) => request("/auth/login", { body, method: "POST", ...options });
export const authRequest = (options) => request("/auth/refresh", { method: "GET", ...options });
export const getCurrentUserRequest = (options) => request("/auth", { method: "GET", ...options });
export const logoutRequest = (options) => request("/auth/logout", { method: "GET", ...options });
export const adminCreateFilm = (body, options) => request("/films/fullCreate", {
    body,
    method: "POST",
    ...options,
});
export const actorsRequest = (params, options) => request("/actor", { method: "GET", ...options, params });
//# sourceMappingURL=schema.js.map