import { parseISO, format } from "date-fns";

/**
 * По дефолту функция принимает дату формата ISO из api и возвращает дату вида DD.MM.YYYY
 * @param date
 * @param format
 */

const formatDate = (
  time: string | undefined | null,
  targetFormat = "dd.MM.yyyy",
) => {
  if (time === null || time === undefined || time === "") return time;

  const parsedTime = parseISO(time);

  return format(parsedTime, targetFormat);
};

export { formatDate };
