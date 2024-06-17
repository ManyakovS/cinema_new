import { useUserStore } from "@/stores/user";
import { getCurrentPath } from "@/utils/functions/get-current-path";

export const authGuard = async (to, from, next) => {
  const userStore = useUserStore();

  const {
    query: { redirect },
  } = from;

  if (!userStore.isAuthenticated) {
    const token = userStore.accessToken;
    if (token) {
      try {
        await userStore.getCurrentUser();
        if (redirect) window.location.href = redirect;
        return next();
      } catch (error) {
        next(`/auth/login?redirect=${getCurrentPath()}`);
      }
    } else {
      next(`/auth/login?redirect=${getCurrentPath()}`);
    }
  } else {
    if (redirect) window.location.href = redirect;
    next();
  }
};
