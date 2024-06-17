import { defineStore } from "pinia";
import { notificationsGetRequest, notificationsReadPutRequest, notificationsReadAllPutRequest, } from "@/@types/schema";
export const useNotificationStore = defineStore("notificationStore", () => {
    const notifications = ref([]);
    const fetchNotifications = async (userId) => {
        const { data } = await notificationsGetRequest(userId);
        notifications.value = data;
        return data;
    };
    const addNotification = (notification) => {
        notifications.value.unshift(notification);
        return notifications;
    };
    const readNotification = async (notificationId) => {
        const { data } = await notificationsReadPutRequest({ notificationId });
        notifications.value.splice(notifications.value.findIndex((n) => n.id === data.id), 1, {
            ...data,
        });
    };
    const readAllNotification = async (userId) => {
        const { data } = await notificationsReadAllPutRequest({ userId });
        notifications.value = data;
    };
    return {
        notifications,
        fetchNotifications,
        addNotification,
        readNotification,
        readAllNotification,
    };
});
//# sourceMappingURL=notifications.js.map