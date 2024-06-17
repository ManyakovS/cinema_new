import { type BookTicketsDTO, type TicketResource } from "@/@types/schema";
export declare const useTicketStore: import("pinia").StoreDefinition<"ticketStore", import("pinia")._UnwrapAll<Pick<{
    tickets: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticketsUser: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticket: globalThis.Ref<TicketResource>;
    getTicket: (ticketId: number, forceFetch?: boolean) => Promise<TicketResource | globalThis.Ref<TicketResource>>;
    getTickets: (ticketIds: number[]) => Promise<TicketResource[]>;
    bookTicket: (body: BookTicketsDTO) => Promise<void>;
    cancelBookTicket: (body: BookTicketsDTO) => Promise<void>;
    buyTicket: (body: BookTicketsDTO) => Promise<void>;
    getUserTickets: (params: {
        userId: number;
        filmId: number;
    }) => Promise<TicketResource[]>;
}, "tickets" | "ticket" | "ticketsUser">>, Pick<{
    tickets: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticketsUser: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticket: globalThis.Ref<TicketResource>;
    getTicket: (ticketId: number, forceFetch?: boolean) => Promise<TicketResource | globalThis.Ref<TicketResource>>;
    getTickets: (ticketIds: number[]) => Promise<TicketResource[]>;
    bookTicket: (body: BookTicketsDTO) => Promise<void>;
    cancelBookTicket: (body: BookTicketsDTO) => Promise<void>;
    buyTicket: (body: BookTicketsDTO) => Promise<void>;
    getUserTickets: (params: {
        userId: number;
        filmId: number;
    }) => Promise<TicketResource[]>;
}, never>, Pick<{
    tickets: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticketsUser: globalThis.Ref<{
        id: number;
        status: import("@/@types/schema").TicketStatus;
        cost: number;
        code: string;
        session: {
            id: number;
            createdAt: string;
            updatedAt: string;
            sessionTimeStart: string;
            sessionTimeEnd: string;
            status: import("@/@types/schema").SessionStatus;
            sessionStatus: {
                name: string | number;
                value: string;
            };
            cinemaHallId: number;
            cinemaHall: {
                id: number;
                name: string;
                adress: string;
                timeOpen: string;
                timeClose: string;
                contact?: string;
                sessions: any[];
                places: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: any;
                    ticket: {
                        id: number;
                        cost: number;
                        status: import("@/@types/schema").TicketStatus;
                        ticketStatus: {
                            name: string | number;
                            value: string;
                        };
                        code: string;
                        place: any;
                        sessionId: number;
                        session: any;
                        UserTicket: {
                            user: {
                                film: {
                                    id: number;
                                    shortTitie: string;
                                    dateStart: string;
                                    title: string;
                                    duration: number;
                                    description: string;
                                    images: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    }[];
                                    genres: {
                                        id: number;
                                        name: string;
                                    }[];
                                    actors: {
                                        actor: {
                                            id: number;
                                            name: string;
                                            image: {
                                                id: number;
                                                createdAt: string;
                                                updatedAt: string;
                                                path: string;
                                                name: string;
                                            };
                                        };
                                        position: string;
                                    }[];
                                };
                                filmId: number;
                                user: {
                                    name: string;
                                    email: string;
                                    id: number;
                                    phone?: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                userId: number;
                                notification: boolean;
                                status: import("@/@types/schema").FilmStatus;
                                userFilmStatus: {
                                    name: string | number;
                                    value: string;
                                };
                                userTickets: any[];
                            };
                            userId: number;
                            filmId: number;
                            status: import("@/@types/schema").TicketStatus;
                            userTicketStatus: {
                                name: string | number;
                                value: string;
                            };
                            ticket: any;
                            ticketId: number;
                        }[];
                    }[];
                }[];
            };
            filmId: number;
            film?: {
                id: number;
                shortTitie: string;
                dateStart: string;
                title: string;
                duration: number;
                description: string;
                images: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    path: string;
                    name: string;
                }[];
                genres: {
                    id: number;
                    name: string;
                }[];
                actors: {
                    actor: {
                        id: number;
                        name: string;
                        image: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        };
                    };
                    position: string;
                }[];
            };
            tickets: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: any;
                UserTicket: {
                    user: {
                        film: {
                            id: number;
                            shortTitie: string;
                            dateStart: string;
                            title: string;
                            duration: number;
                            description: string;
                            images: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            }[];
                            genres: {
                                id: number;
                                name: string;
                            }[];
                            actors: {
                                actor: {
                                    id: number;
                                    name: string;
                                    image: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        path: string;
                                        name: string;
                                    };
                                };
                                position: string;
                            }[];
                        };
                        filmId: number;
                        user: {
                            name: string;
                            email: string;
                            id: number;
                            phone?: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        userId: number;
                        notification: boolean;
                        status: import("@/@types/schema").FilmStatus;
                        userFilmStatus: {
                            name: string | number;
                            value: string;
                        };
                        userTickets: any[];
                    };
                    userId: number;
                    filmId: number;
                    status: import("@/@types/schema").TicketStatus;
                    userTicketStatus: {
                        name: string | number;
                        value: string;
                    };
                    ticket: any;
                    ticketId: number;
                }[];
            }[];
        };
        UserTicket: {
            user: {
                film: {
                    id: number;
                    shortTitie: string;
                    dateStart: string;
                    title: string;
                    duration: number;
                    description: string;
                    images: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    }[];
                    genres: {
                        id: number;
                        name: string;
                    }[];
                    actors: {
                        actor: {
                            id: number;
                            name: string;
                            image: {
                                id: number;
                                createdAt: string;
                                updatedAt: string;
                                path: string;
                                name: string;
                            };
                        };
                        position: string;
                    }[];
                };
                filmId: number;
                user: {
                    name: string;
                    email: string;
                    id: number;
                    phone?: string;
                    image: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        path: string;
                        name: string;
                    };
                };
                userId: number;
                notification: boolean;
                status: import("@/@types/schema").FilmStatus;
                userFilmStatus: {
                    name: string | number;
                    value: string;
                };
                userTickets: any[];
            };
            userId: number;
            filmId: number;
            status: import("@/@types/schema").TicketStatus;
            userTicketStatus: {
                name: string | number;
                value: string;
            };
            ticket: {
                id: number;
                cost: number;
                status: import("@/@types/schema").TicketStatus;
                ticketStatus: {
                    name: string | number;
                    value: string;
                };
                code: string;
                place: {
                    code: string;
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            sessionTimeStart: string;
                            sessionTimeEnd: string;
                            status: import("@/@types/schema").SessionStatus;
                            sessionStatus: {
                                name: string | number;
                                value: string;
                            };
                            cinemaHallId: number;
                            cinemaHall: any;
                            filmId: number;
                            film?: {
                                id: number;
                                shortTitie: string;
                                dateStart: string;
                                title: string;
                                duration: number;
                                description: string;
                                images: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                }[];
                                genres: {
                                    id: number;
                                    name: string;
                                }[];
                                actors: {
                                    actor: {
                                        id: number;
                                        name: string;
                                        image: {
                                            id: number;
                                            createdAt: string;
                                            updatedAt: string;
                                            path: string;
                                            name: string;
                                        };
                                    };
                                    position: string;
                                }[];
                            };
                            tickets: any[];
                        }[];
                        places: any[];
                    };
                    ticket: any[];
                };
                sessionId: number;
                session: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    sessionTimeStart: string;
                    sessionTimeEnd: string;
                    status: import("@/@types/schema").SessionStatus;
                    sessionStatus: {
                        name: string | number;
                        value: string;
                    };
                    cinemaHallId: number;
                    cinemaHall: {
                        id: number;
                        name: string;
                        adress: string;
                        timeOpen: string;
                        timeClose: string;
                        contact?: string;
                        sessions: any[];
                        places: {
                            code: string;
                            cinemaHallId: number;
                            cinemaHall: any;
                            ticket: any[];
                        }[];
                    };
                    filmId: number;
                    film?: {
                        id: number;
                        shortTitie: string;
                        dateStart: string;
                        title: string;
                        duration: number;
                        description: string;
                        images: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            path: string;
                            name: string;
                        }[];
                        genres: {
                            id: number;
                            name: string;
                        }[];
                        actors: {
                            actor: {
                                id: number;
                                name: string;
                                image: {
                                    id: number;
                                    createdAt: string;
                                    updatedAt: string;
                                    path: string;
                                    name: string;
                                };
                            };
                            position: string;
                        }[];
                    };
                    tickets: any[];
                };
                UserTicket: any[];
            };
            ticketId: number;
        }[];
    }[]>;
    ticket: globalThis.Ref<TicketResource>;
    getTicket: (ticketId: number, forceFetch?: boolean) => Promise<TicketResource | globalThis.Ref<TicketResource>>;
    getTickets: (ticketIds: number[]) => Promise<TicketResource[]>;
    bookTicket: (body: BookTicketsDTO) => Promise<void>;
    cancelBookTicket: (body: BookTicketsDTO) => Promise<void>;
    buyTicket: (body: BookTicketsDTO) => Promise<void>;
    getUserTickets: (params: {
        userId: number;
        filmId: number;
    }) => Promise<TicketResource[]>;
}, "getTicket" | "getTickets" | "bookTicket" | "cancelBookTicket" | "buyTicket" | "getUserTickets">>;
//# sourceMappingURL=tickets.d.ts.map