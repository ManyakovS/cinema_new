import { socket } from "../index";

// Types
import { Notification } from "@/@types/schema";

// Store
import { useNotificationStore } from "@/stores/notifications";

// Hooks
import { useNotify } from "@/utils/hooks/use-notify";

// Прослушиваем события 'notification' от сервера
export const wssNotification = () => {
  const { addNotification } = useNotificationStore();
  const { notifyError } = useNotify();

  socket.on("notification", function (notification: Notification) {
    try {
      addNotification(notification);
    } catch (error) {
      notifyError(error);
    }
  });
};
