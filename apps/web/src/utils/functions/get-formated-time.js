import { format } from "date-fns";
import { ru } from "date-fns/locale";
export function getFormatedTime(date, formatSchema = "dd.MM.yyyy") {
    return format(date, formatSchema, { locale: ru });
}
export function formatTimeDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes ? minutes + "м" : ""}`;
}
//# sourceMappingURL=get-formated-time.js.map