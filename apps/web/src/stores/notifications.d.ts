import type { Notification } from "@/@types/schema";
export declare const useNotificationStore: import("pinia").StoreDefinition<"notificationStore", import("pinia")._UnwrapAll<Pick<{
    notifications: globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    fetchNotifications: (userId: number) => Promise<Notification[]>;
    addNotification: (notification: Notification) => globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    readNotification: (notificationId: number) => Promise<void>;
    readAllNotification: (userId: number) => Promise<void>;
}, "notifications">>, Pick<{
    notifications: globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    fetchNotifications: (userId: number) => Promise<Notification[]>;
    addNotification: (notification: Notification) => globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    readNotification: (notificationId: number) => Promise<void>;
    readAllNotification: (userId: number) => Promise<void>;
}, never>, Pick<{
    notifications: globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    fetchNotifications: (userId: number) => Promise<Notification[]>;
    addNotification: (notification: Notification) => globalThis.Ref<{
        id: number;
        createdAt: string;
        updatedAt: string;
        content: string;
        read: boolean;
        userId: number;
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
        type: string;
        notificationType: import("@/@types/schema").NotificationType;
    }[]>;
    readNotification: (notificationId: number) => Promise<void>;
    readAllNotification: (userId: number) => Promise<void>;
}, "fetchNotifications" | "addNotification" | "readNotification" | "readAllNotification">>;
//# sourceMappingURL=notifications.d.ts.map