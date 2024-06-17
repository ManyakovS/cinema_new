import { useUserStore } from "@/stores/user";

export const willBeEmailCodeSendGuard = async (to, from, next) => {
  const userStore = useUserStore();

  const email = userStore.queryEmail || to.query.email;

  if (email) return next();
  else next("/");
};
