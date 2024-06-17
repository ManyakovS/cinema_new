import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import ru from "date-fns/locale/ru";
import * as rules from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import { veeValidateRu } from "./i18n/vee-validate-ru";
import { lightTheme } from "./themes/ligth-theme";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/scss/main.scss";
import router from "@/router";
import App from "@/App.vue";
const app = createApp(App);
const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
    },
    theme: {
        themes: {
            lightTheme,
        },
        variations: {
            colors: ["primary", "secondary"],
            lighten: 10,
            darken: 10,
        },
    },
    components,
    directives,
    defaults: {
        VBtn: { variant: "flat" },
        MyButton: { variant: "tonal" },
        VInput: { variant: "flat" },
    },
    date: {
        locale: {
            ru,
        },
    },
});
Object.keys(rules).forEach((rule) => {
    if (typeof rules[rule] !== "function") {
        console.error(`Rule ${rule} is not a function`);
        return;
    }
    defineRule(rule, rules[rule]);
});
defineRule("confirmed", (value, [target]) => {
    if (value === target)
        return true;
    return "Passwords must match";
});
configure({
    generateMessage: localize({
        ru: veeValidateRu,
    }),
});
localize("ru");
app.use(router);
app.use(createPinia());
app.use(vuetify);
app.mount("#app");
import * as socket from "@/web-socket/index";
socket;
//# sourceMappingURL=main.js.map