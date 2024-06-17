import { request } from '@/utils/services/client'
import {
  AuthResource,
  CreateVerifyDto,
  LoginUserDto,
  RegisterUserDto,
  UserResource,
  VerifyDto,
} from 'api/src/modules/auth/dto/auth.dto'
import { FullCreateFilm } from 'api/src/modules/film/dto/film.dto'

import { GetActorsParamsDTO } from 'api/src/modules/actor/dto/actor.dto'

import {
  ReadAllNotification,
  ReadNotification,
} from 'api/src/modules/notifications/dto/notifications.dto'

import { ChangeUserImage } from 'api/src/modules/user/dto/user.dto'

export interface NameValueResource {
  name: string | number
  value: string
}

/* Основные сущности */

export interface Notification {
  id: number
  createdAt: string
  updatedAt: string
  content: string
  read: boolean
  userId: number
  user: UserShortResource
  type: string
  notificationType: NotificationType
}

export interface User {
  id: number
  createdAt: string
  updatedAt: string

  email: string
  phone?: string
  name: string
  password: string

  imageId: number
  image: Image

  films: UserFilm[]
}

export interface UserFilm {
  film: Film
  filmId: number
  user: UserShortResource
  userId: number

  notification: boolean
  status: FilmStatus
  userFilmStatus: NameValueResource
  userTickets: UserTicket[]
}

export interface Film {
  id: number
  shortTitie: string
  dateStart: string
  title: string
  duration: number
  description: string
  images: Image[]
  genres: Genre[]
  actors: ActorPosition[]
}

export interface Session {
  id: number
  createdAt: string
  updatedAt: string
  sessionTimeStart: string
  sessionTimeEnd: string
  status: SessionStatus
  sessionStatus: NameValueResource
  cinemaHallId: number
  cinemaHall: CinemaHall
  filmId: number
  film?: Film
  tickets: Ticket[]
}

export interface CinemaHall {
  id: number

  name: string
  adress: string

  timeOpen: string
  timeClose: string

  contact?: string

  sessions: Session[]
  places: Place[]
}

export interface Ticket {
  id: number

  cost: number
  status: TicketStatus
  ticketStatus: NameValueResource

  code: string
  place: Place

  sessionId: number
  session: Session

  UserTicket: UserTicket[]
}

export interface BookTicketsDTO {
  userId: number
  ticketsIds: number[]
}

export interface Place {
  code: string
  cinemaHallId: number
  cinemaHall: CinemaHall
  ticket: Ticket[]
}

export interface Image {
  id: number
  createdAt: string
  updatedAt: string
  path: string
  name: string
}

export interface Genre {
  id: number
  name: string
}

export interface Actor {
  id: number
  name: string
  image: Image
}

export interface UserTicket {
  user: UserFilm
  userId: number
  filmId: number

  status: TicketStatus
  userTicketStatus: NameValueResource

  ticket: Ticket
  ticketId: number
}

export interface ActorPosition {
  actor: Actor
  position: string
}

/* Фильтры  */

export interface GetFilmsParamsDTO {
  filmdId?: number
  title?: string
  shortTitle?: string
  dateStart?: string
}

export interface GetFilmsByUserParamsDTO {
  userId: number
  ticketStatus?: TicketStatus
}

export interface GetSessionsParamsDTO {
  sessionId?: number
  filmId?: number
  status?: SessionStatus
}

/* Enum */

export enum FilmStatus {
  AVAILABLE = 'available',
  COMPLETED = 'completed',
}

export const dataByFilmStatus = {
  [FilmStatus.AVAILABLE]: {
    label: 'Доступен',
  },
  [FilmStatus.COMPLETED]: {
    label: 'Завершен',
  },
}

export enum SessionStatus {
  AVAILABLE = 'available',
  COMPLETED = 'completed',
}

export const dataBySessionStatus = {
  [SessionStatus.AVAILABLE]: {
    label: 'Доступен',
  },
  [SessionStatus.COMPLETED]: {
    label: 'Завершен',
  },
}

export enum TicketStatus {
  AVAILABLE = 'available',
  SELECTED = 'selected',
  BOOKED = 'booked',
  CANCELED = 'canceled',
  RESERVATED = 'reservated',
  FINISHED = 'finished',
}

export const dataByTicketStatus = {
  [TicketStatus.AVAILABLE]: {
    label: 'Доступен',
  },
  [TicketStatus.SELECTED]: {
    label: 'Выбранный',
  },
  [TicketStatus.BOOKED]: {
    label: 'Забронированный',
  },
  [TicketStatus.CANCELED]: {
    label: 'Отменен',
  },
  [TicketStatus.RESERVATED]: {
    label: 'Зарезервирован',
  },
  [TicketStatus.FINISHED]: {
    label: 'Завершен',
  },
}

export enum NotificationType {
  TICKET_BOOKED = 'ticket_book',
}

/* Ресурсы */
/* Фильмы */
export interface FilmShortResource extends Film {
  images: Image[]
  genres: Genre[]
}

export interface FilmResource extends FilmShortResource {
  actors: ActorPosition[]
  sessions: Session[]
}

export interface UserFilmResource extends FilmShortResource {
  users: Pick<UserFilm, 'notification' | 'status' | 'userTickets'>
}

/* Сеансы */
export type SessionShortResource = Pick<
  Session,
  'id' | 'sessionTimeStart' | 'status' | 'cinemaHallId'
>

export type SessionResource = Pick<
  Session,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'sessionTimeStart'
  | 'sessionTimeEnd'
  | 'status'
  | 'cinemaHall'
  | 'tickets'
>

/* Юзеры */

export type UserShortResource = Pick<
  User,
  'id' | 'name' | 'phone' | 'email' | 'image'
>

/* export type TicketShortResource = Pick<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'sessionTimeStart' | 'sessionTimeEnd' | 'status' | 'cinemaHall' | 'tickets'> */

export type TicketResource = Pick<
  Ticket,
  'id' | 'cost' | 'status' | 'code' | 'session' | 'UserTicket'
>

// Получить список фильмов
export const filmsGetRequest = (params?: GetFilmsParamsDTO, options?: any) =>
  request<FilmShortResource[]>('/films', { method: 'GET', params, ...options })

// Получить фильм по id
export const filmGetRequest = (filmId: number, options?: any) =>
  request<FilmResource>(`/films/id?filmId=${filmId}`, {
    method: 'GET',
    ...options,
  })

// Получить фильм пользователя
export const filmGetRequestByUser = (
  params?: GetFilmsByUserParamsDTO,
  options?: any,
) =>
  request<UserFilmResource[]>('/films/by-user', {
    method: 'GET',
    params,
    ...options,
  })

// Получить список сеансов
export const sessionsGetRequest = (
  params?: GetSessionsParamsDTO,
  options?: any,
) =>
  request<SessionShortResource[]>('/session', {
    method: 'GET',
    params,
    ...options,
  })

// Получить сеанс по id
export const sessionGetRequest = (sessionId: number, options?: any) =>
  request<SessionResource>(`/session/id?sessionId=${sessionId}`, {
    method: 'GET',
    ...options,
  })

// Получить билет по id
export const ticketGetRequest = (ticketId: number, options?: any) =>
  request<TicketResource>(`/ticket/id?ticketId=${ticketId}`, {
    method: 'GET',
    ...options,
  })

// Получить список билетов по id
export const ticketsGetRequest = (ticketIds: number[], options?: any) =>
  request<TicketResource[]>('/ticket/ids', {
    method: 'GET',
    ...options,
    params: { ticketIds },
  })

// Получить список билетов пользователя по фильму по id
export const ticketsUserFilmGetRequest = (
  params: { userId: number; filmId: number },
  options?: any,
) =>
  request<TicketResource[]>('/ticket/userId', {
    method: 'GET',
    ...options,
    params,
  })

// Забронировать билет
export const ticketBook = (body: BookTicketsDTO, options?: any) =>
  request<TicketResource[]>('/ticket/book', {
    body,
    method: 'POST',
    ...options,
  })

// Отменить бронь билет
export const ticketCancelBook = (body: BookTicketsDTO, options?: any) =>
  request<TicketResource[]>('/ticket/cancelBooked', {
    body,
    method: 'POST',
    ...options,
  })

// Купить билет
export const ticketBuy = (body: BookTicketsDTO, options?: any) =>
  request<TicketResource[]>('/ticket/buy', { body, method: 'POST', ...options })

/* Уведомления */

/* Получить список уведомлений */
export const notificationsGetRequest = (userId: number, options?: any) =>
  request<Notification[]>(`/notifications/id?userId=${userId}`, {
    method: 'GET',
    ...options,
  })

/* Прочитать уведомление */
export const notificationsReadPutRequest = (
  body: ReadNotification,
  options?: any,
) =>
  request<Notification>('/notifications/read', {
    body,
    method: 'PUT',
    ...options,
  })

/* Прочитать все уведомления */
export const notificationsReadAllPutRequest = (
  body: ReadAllNotification,
  options?: any,
) =>
  request<Notification[]>('/notifications/readAll', {
    body,
    method: 'PUT',
    ...options,
  })

/* Юзер */

/* Сменить иконку */
export const useChangeImageRequest = (body: ChangeUserImage, options?: any) =>
  request<UserShortResource>('/users/change-image', {
    body,
    method: 'PUT',
    ...options,
  })

/* Аутентификация */
/* Отправить код верификации на почту */
export const verifyEmailRequest = (body: CreateVerifyDto, options?: any) =>
  request<void>('/auth/verifyEmail', { body, method: 'POST', ...options })

/* Проверить код верификации */
export const verifyCodeRequest = (body: VerifyDto, options?: any) =>
  request<boolean>('/auth/verifyCode', { body, method: 'POST', ...options })

/* Регистрация */
export const registerRequest = (body: RegisterUserDto, options?: any) =>
  request<AuthResource>('/auth/register', { body, method: 'POST', ...options })

/* Авторизация */
export const loginRequest = (body: LoginUserDto, options?: any) =>
  request<AuthResource>('/auth/login', { body, method: 'POST', ...options })

/* Получить токен по refresh_token */
export const authRequest = (options?: any) => request<AuthResource>('/auth/refresh', { method: 'GET', ...options })

/* Аутентификация */
export const getCurrentUserRequest = (options?: any) =>
  request<UserResource>('/auth', { method: 'GET', ...options })

/* Выйти */
export const logoutRequest = (options?: any) =>
  request<void>('/auth/logout', { method: 'GET', ...options })

/* Админ */
/* Создать фильм */
export const adminCreateFilm = (body: FullCreateFilm, options?: any) => request<FilmResource>('/films/fullCreate', { body, method: 'POST', ...options })

/* Получить актеров */
export const actorsRequest = (params: GetActorsParamsDTO, options?: any) => request<Actor[]>('/actor', { method: 'GET', ...options, params })

