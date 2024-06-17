import { AuthResource, CreateVerifyDto, LoginUserDto, RegisterUserDto, UserResource, VerifyDto } from "api/src/modules/auth/dto/auth.dto";
import { FullCreateFilm } from "api/src/modules/film/dto/film.dto";
import { GetActorsParamsDTO } from "api/src/modules/actor/dto/actor.dto";
import { ReadAllNotification, ReadNotification } from "api/src/modules/notifications/dto/notifications.dto";
import { ChangeUserImage } from "api/src/modules/user/dto/user.dto";
export interface NameValueResource {
    name: string | number;
    value: string;
}
export interface Notification {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    read: boolean;
    userId: number;
    user: UserShortResource;
    type: string;
    notificationType: NotificationType;
}
export interface User {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    phone?: string;
    name: string;
    password: string;
    imageId: number;
    image: Image;
    films: UserFilm[];
}
export interface UserFilm {
    film: Film;
    filmId: number;
    user: UserShortResource;
    userId: number;
    notification: boolean;
    status: FilmStatus;
    userFilmStatus: NameValueResource;
    userTickets: UserTicket[];
}
export interface Film {
    id: number;
    shortTitie: string;
    dateStart: string;
    title: string;
    duration: number;
    description: string;
    images: Image[];
    genres: Genre[];
    actors: ActorPosition[];
}
export interface Session {
    id: number;
    createdAt: string;
    updatedAt: string;
    sessionTimeStart: string;
    sessionTimeEnd: string;
    status: SessionStatus;
    sessionStatus: NameValueResource;
    cinemaHallId: number;
    cinemaHall: CinemaHall;
    filmId: number;
    film?: Film;
    tickets: Ticket[];
}
export interface CinemaHall {
    id: number;
    name: string;
    adress: string;
    timeOpen: string;
    timeClose: string;
    contact?: string;
    sessions: Session[];
    places: Place[];
}
export interface Ticket {
    id: number;
    cost: number;
    status: TicketStatus;
    ticketStatus: NameValueResource;
    code: string;
    place: Place;
    sessionId: number;
    session: Session;
    UserTicket: UserTicket[];
}
export interface BookTicketsDTO {
    userId: number;
    ticketsIds: number[];
}
export interface Place {
    code: string;
    cinemaHallId: number;
    cinemaHall: CinemaHall;
    ticket: Ticket[];
}
export interface Image {
    id: number;
    createdAt: string;
    updatedAt: string;
    path: string;
    name: string;
}
export interface Genre {
    id: number;
    name: string;
}
export interface Actor {
    id: number;
    name: string;
    image: Image;
}
export interface UserTicket {
    user: UserFilm;
    userId: number;
    filmId: number;
    status: TicketStatus;
    userTicketStatus: NameValueResource;
    ticket: Ticket;
    ticketId: number;
}
export interface ActorPosition {
    actor: Actor;
    position: string;
}
export interface GetFilmsParamsDTO {
    filmdId?: number;
    title?: string;
    shortTitle?: string;
    dateStart?: string;
}
export interface GetFilmsByUserParamsDTO {
    userId: number;
    ticketStatus?: TicketStatus;
}
export interface GetSessionsParamsDTO {
    sessionId?: number;
    filmId?: number;
    status?: SessionStatus;
}
export declare enum FilmStatus {
    AVAILABLE = "available",
    COMPLETED = "completed"
}
export declare const dataByFilmStatus: {
    available: {
        label: string;
    };
    completed: {
        label: string;
    };
};
export declare enum SessionStatus {
    AVAILABLE = "available",
    COMPLETED = "completed"
}
export declare const dataBySessionStatus: {
    available: {
        label: string;
    };
    completed: {
        label: string;
    };
};
export declare enum TicketStatus {
    AVAILABLE = "available",
    SELECTED = "selected",
    BOOKED = "booked",
    CANCELED = "canceled",
    RESERVATED = "reservated",
    FINISHED = "finished"
}
export declare const dataByTicketStatus: {
    available: {
        label: string;
    };
    selected: {
        label: string;
    };
    booked: {
        label: string;
    };
    canceled: {
        label: string;
    };
    reservated: {
        label: string;
    };
    finished: {
        label: string;
    };
};
export declare enum NotificationType {
    TICKET_BOOKED = "ticket_book"
}
export interface FilmShortResource extends Film {
    images: Image[];
    genres: Genre[];
}
export interface FilmResource extends FilmShortResource {
    actors: ActorPosition[];
    sessions: Session[];
}
export interface UserFilmResource extends FilmShortResource {
    users: Pick<UserFilm, "notification" | "status" | "userTickets">;
}
export type SessionShortResource = Pick<Session, "id" | "sessionTimeStart" | "status" | "cinemaHallId">;
export type SessionResource = Pick<Session, "id" | "createdAt" | "updatedAt" | "sessionTimeStart" | "sessionTimeEnd" | "status" | "cinemaHall" | "tickets">;
export type UserShortResource = Pick<User, "id" | "name" | "phone" | "email" | "image">;
export type TicketResource = Pick<Ticket, "id" | "cost" | "status" | "code" | "session" | "UserTicket">;
export declare const filmsGetRequest: (params?: GetFilmsParamsDTO, options?: any) => Promise<import("axios").AxiosResponse<FilmShortResource[], any>>;
export declare const filmGetRequest: (filmId: number, options?: any) => Promise<import("axios").AxiosResponse<FilmResource, any>>;
export declare const filmGetRequestByUser: (params?: GetFilmsByUserParamsDTO, options?: any) => Promise<import("axios").AxiosResponse<UserFilmResource[], any>>;
export declare const sessionsGetRequest: (params?: GetSessionsParamsDTO, options?: any) => Promise<import("axios").AxiosResponse<SessionShortResource[], any>>;
export declare const sessionGetRequest: (sessionId: number, options?: any) => Promise<import("axios").AxiosResponse<SessionResource, any>>;
export declare const ticketGetRequest: (ticketId: number, options?: any) => Promise<import("axios").AxiosResponse<TicketResource, any>>;
export declare const ticketsGetRequest: (ticketIds: number[], options?: any) => Promise<import("axios").AxiosResponse<TicketResource[], any>>;
export declare const ticketsUserFilmGetRequest: (params: {
    userId: number;
    filmId: number;
}, options?: any) => Promise<import("axios").AxiosResponse<TicketResource[], any>>;
export declare const ticketBook: (body: BookTicketsDTO, options?: any) => Promise<import("axios").AxiosResponse<TicketResource[], any>>;
export declare const ticketCancelBook: (body: BookTicketsDTO, options?: any) => Promise<import("axios").AxiosResponse<TicketResource[], any>>;
export declare const ticketBuy: (body: BookTicketsDTO, options?: any) => Promise<import("axios").AxiosResponse<TicketResource[], any>>;
export declare const notificationsGetRequest: (userId: number, options?: any) => Promise<import("axios").AxiosResponse<Notification[], any>>;
export declare const notificationsReadPutRequest: (body: ReadNotification, options?: any) => Promise<import("axios").AxiosResponse<Notification, any>>;
export declare const notificationsReadAllPutRequest: (body: ReadAllNotification, options?: any) => Promise<import("axios").AxiosResponse<Notification[], any>>;
export declare const useChangeImageRequest: (body: ChangeUserImage, options?: any) => Promise<import("axios").AxiosResponse<UserShortResource, any>>;
export declare const verifyEmailRequest: (body: CreateVerifyDto, options?: any) => Promise<import("axios").AxiosResponse<void, any>>;
export declare const verifyCodeRequest: (body: VerifyDto, options?: any) => Promise<import("axios").AxiosResponse<boolean, any>>;
export declare const registerRequest: (body: RegisterUserDto, options?: any) => Promise<import("axios").AxiosResponse<AuthResource, any>>;
export declare const loginRequest: (body: LoginUserDto, options?: any) => Promise<import("axios").AxiosResponse<AuthResource, any>>;
export declare const authRequest: (options?: any) => Promise<import("axios").AxiosResponse<AuthResource, any>>;
export declare const getCurrentUserRequest: (options?: any) => Promise<import("axios").AxiosResponse<UserResource, any>>;
export declare const logoutRequest: (options?: any) => Promise<import("axios").AxiosResponse<void, any>>;
export declare const adminCreateFilm: (body: FullCreateFilm, options?: any) => Promise<import("axios").AxiosResponse<FilmResource, any>>;
export declare const actorsRequest: (params: GetActorsParamsDTO, options?: any) => Promise<import("axios").AxiosResponse<Actor[], any>>;
//# sourceMappingURL=schema.d.ts.map