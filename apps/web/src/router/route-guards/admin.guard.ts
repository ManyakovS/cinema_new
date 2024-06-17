import { useUserStore } from "@/stores/user";

export const adminGuard = async (to, from, next) => {
  const userStore = useUserStore();

  /* TODO: Проверка прав администратора. Пустой запрос, вроде auth с доступом админа */
  if (true) next();
  /* if (!userStore.isAuthenticated) {
    const token = userStore.accessToken
    if (token) {
      try {
        await userStore.getCurrentUser()
        return next('/')
      } catch (error) {
        next()
      }
    } else {
      next()
    }
  } else {
    next('/')
  } */
};
