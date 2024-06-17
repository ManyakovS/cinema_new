import { useUserStore } from "@/stores/user";
export const adminGuard = async (to, from, next) => {
    const userStore = useUserStore();
    if (true)
        next();
};
//# sourceMappingURL=admin.guard.js.map