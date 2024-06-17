import { createApp } from "vue";
import { values } from "lodash";

// Components
import BaseNotify from "@/components/_uikit/notify/BaseNotify.vue";

type notifyErrorParamsType = {
  withoutNotFoundRedirect?: boolean;
};

export function useNotify() {
  const router = useRouter();
  const timeout = 3000;
  const position = "bottom-right";

  const notifySuccess = (message: string) => {
    notify({
      type: "positive",
      message,
      position,
      timeout,
      html: true,
    });
  };

  const notifyInfo = (message: string) => {
    notify({
      type: "info",
      message,
      position,
      timeout,
      html: true,
    });
  };

  const notifyError = (error: any, params?: notifyErrorParamsType) => {
    if (error !== "late request") {
      let message =
        "Что-то пошло не так. Повторите попытку позднее или перезагрузите страницу";
      if (error.response && error.response.data) {
        if (error.response.status === 403) {
          /* Cookies.remove(authTokenName)
          router.replace({ name: 'forbidden' }) */
        } else if (
          error.response.status === 404 &&
          !params?.withoutNotFoundRedirect
        ) {
          router.replace({ name: "not-found" });
        } else if (error.response.status === 422) {
          if (error.response.data.errors) {
            message = values(error.response.data.errors)
              .map((field: string[]) => field[0])
              .join("<br/>");
          } else {
            message = error.response.data.message;
          }
        } else {
          message = error.response.data.message;
        }
      } else if (typeof error === "string") {
        message = error;
      } else if (typeof error === "boolean") {
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
