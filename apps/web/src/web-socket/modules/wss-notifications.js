import { socket } from "../index";
import { useNotificationStore } from "@/stores/notifications";
import { useNotify } from "@/utils/hooks/use-notify";
export const wssNotification = () => {
    const { addNotification } = useNotificationStore();
    const { notifyError } = useNotify();
    socket.on("notification", function (notification) {
        try {
            addNotification(notification);
        }
        catch (error) {
            notifyError(error);
        }
    });
};
//# sourceMappingURL=wss-notifications.js.map