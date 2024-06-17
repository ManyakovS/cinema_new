import { parseISO, format } from "date-fns";
const formatDate = (time, targetFormat = "dd.MM.yyyy") => {
    if (time === null || time === undefined || time === "")
        return time;
    const parsedTime = parseISO(time);
    return format(parsedTime, targetFormat);
};
export { formatDate };
//# sourceMappingURL=format-date.js.map