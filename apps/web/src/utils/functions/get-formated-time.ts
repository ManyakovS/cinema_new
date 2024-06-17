// Utils
import { format } from "date-fns";
import { ru } from "date-fns/locale";
export function getFormatedTime(date: string, formatSchema = "dd.MM.yyyy") {
  return format(date, formatSchema, { locale: ru });
}

export function formatTimeDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  // Форматируем результат в виде строки "2ч 10м"
  return `${hours}ч ${minutes ? minutes + "м" : ""}`;
}
