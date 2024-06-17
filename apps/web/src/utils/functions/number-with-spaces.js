export function getNumberWithSpaces(value) {
    if (value === undefined || value === null)
        return value;
    if (typeof value === "string" && value.includes(".")) {
        const splitted = value.split(".");
        return `${splitted[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")},${splitted[1]}`;
    }
    else {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}
//# sourceMappingURL=number-with-spaces.js.map