import { defineRule } from "vee-validate";
import { getNumberWithSpaces } from "@/utils/functions/number-with-spaces";
defineRule("full_name", (value) => {
    const re = /^\s*[А-ЯЁ][а-яёё\-]+(?:\s+[А-ЯЁ][а-яёё\-]+){1,2}\s*$/;
    return re.test(value);
});
export const veeValidateRu = {
    messages: {
        alpha: "Поле может содержать только буквы",
        alpha_dash: "Поле может содержать только буквы, цифры и дефис",
        alpha_num: "Поле может содержать только буквы и цифры",
        alpha_spaces: "Поле может содержать только буквы и пробелы",
        between: "Поле должно быть между 0:{min} и 1:{max}",
        confirmed: "Поле не совпадает",
        digits: "Поле должно быть числовым и точно содержать 0:{length} цифры",
        dimensions: "Поле должно быть 0:{width} пикселей на 1:{height} пикселей",
        email: "Недействительная почта",
        excluded: "Поле должно быть допустимым значением",
        ext: "Поле должно быть действительным файлом. 0:({args})",
        image: "Поле должно быть изображением",
        oneOf: "Поле должно быть допустимым значением",
        integer: "Поле должно быть целым числом",
        length: "Введите полностью",
        max: "Максимальная длина: 0:{length} символов",
        max_value: getMaxValueErrorMessage,
        mimes: "Поле должно иметь допустимый тип файла. 0:({args})",
        min: "Минимальная длина: 0:{length} символов",
        min_value: getMinValueErrorMessage,
        numeric: "Должно быть числом",
        regex: "Ошибочный формат",
        required: "Обязательное поле",
        requiredSelect: "Обязательное поле",
        required_if: "Обязательное поле",
        size: "Поле должно быть меньше, чем 0:{size}KB",
        date_and_time_min: "время 0:{our} и 1:{time}",
        full_name: "Некорректный формат ФИО",
    },
};
function getMinValueErrorMessage(meta) {
    const params = meta?.rule?.params;
    return params && Array.isArray(params)
        ? `Не менее ${getNumberWithSpaces(params[0])}`
        : "";
}
function getMaxValueErrorMessage(meta) {
    const params = meta?.rule?.params;
    return params && Array.isArray(params)
        ? `Не более ${getNumberWithSpaces(params[0])}`
        : "";
}
//# sourceMappingURL=vee-validate-ru.js.map