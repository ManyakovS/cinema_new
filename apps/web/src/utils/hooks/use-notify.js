import { createApp } from "vue";
import { values } from "lodash";
import BaseNotify from "@/components/_uikit/notify/BaseNotify.vue";
export function useNotify() {
    const router = useRouter();
    const timeout = 3000;
    const position = "bottom-right";
    const notifySuccess = (message) => {
        notify({
            type: "positive",
            message,
            position,
            timeout,
            html: true,
        });
    };
    const notifyInfo = (message) => {
        notify({
            type: "info",
            message,
            position,
            timeout,
            html: true,
        });
    };
    const notifyError = (error, params) => {
        if (error !== "late request") {
            let message = "Что-то пошло не так. Повторите попытку позднее или перезагрузите страницу";
            if (error.response && error.response.data) {
                if (error.response.status === 403) {
                }
                else if (error.response.status === 404 &&
                    !params?.withoutNotFoundRedirect) {
                    router.replace({ name: "not-found" });
                }
                else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        message = values(error.response.data.errors)
                            .map((field) => field[0])
                            .join("<br/>");
                    }
                    else {
                        message = error.response.data.message;
                    }
                }
                else {
                    message = error.response.data.message;
                }
            }
            else if (typeof error === "string") {
                message = error;
            }
            else if (typeof error === "boolean") {
                return;
            }
            notify({
                type: "negative",
                message,
                position,
                timeout,
                html: true,
            });
        }
    };
    return {
        notifySuccess,
        notifyInfo,
        notifyError,
    };
}
function notify(props) {
    const appInstance = createApp(BaseNotify, {
        ...props,
        close: () => closeFunction(),
    });
    appInstance.mount(document.createElement("div"));
    setTimeout(() => {
        closeFunction();
    }, props.timeout + 50);
    const closeFunction = () => {
        if (appInstance) {
            setTimeout(() => {
                appInstance.unmount();
            }, 400);
        }
    };
}
//# sourceMappingURL=use-notify.js.map