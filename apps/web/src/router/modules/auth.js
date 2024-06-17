import { isAuthicatedGuard } from "../route-guards/is-authenticated.guard";
import { willBeEmailCodeSendGuard } from "../route-guards/will-be-email-code-send.guard";
export const routes = [
    {
        name: "auth",
        path: "/auth",
        redirect: { name: "login" },
        component: () => import("@/pages/auth/Auth.vue"),
        children: [
            {
                name: "login",
                path: "login",
                component: () => import("@/pages/auth/components/auth-forms/Login.vue"),
                beforeEnter: isAuthicatedGuard,
            },
            {
                name: "register",
                path: "register",
                component: () => import("@/pages/auth/components/auth-forms/register/Register.vue"),
                beforeEnter: isAuthicatedGuard,
                redirect: { name: "register.verify-email" },
                children: [
                    {
                        name: "register.verify-email",
                        path: "register/verify-email",
                        component: () => import("@/pages/auth/components/auth-forms/register/children/RegisterVerifyEmail.vue"),
                        beforeEnter: isAuthicatedGuard,
                    },
                    {
                        name: "register.verify-code",
                        path: "register/verify-code",
                        component: () => import("@/pages/auth/components/auth-forms/register/children/RegistrerVerifyCode.vue"),
                        beforeEnter: isAuthicatedGuard,
                    },
                    {
                        name: "register.main.form",
                        path: "register/main-form",
                        component: () => import("@/pages/auth/components/auth-forms/register/children/RegisterMainForm.vue"),
                        beforeEnter: isAuthicatedGuard,
                    },
                ],
            },
            {
                name: "restore",
                path: "restore",
                component: () => import("@/pages/auth/components/auth-forms/Restore.vue"),
                beforeEnter: isAuthicatedGuard,
            },
            {
                name: "restore-password",
                path: "restore-password",
                component: () => import("@/pages/auth/components/auth-forms/RestorePassword.vue"),
                beforeEnter: [isAuthicatedGuard, willBeEmailCodeSendGuard],
            },
        ],
    },
];
export default routes;
//# sourceMappingURL=auth.js.map