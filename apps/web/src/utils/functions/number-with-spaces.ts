export function getNumberWithSpaces(
  value: string | number | null | undefined,
): string | number | null | undefined {
  if (value === undefined || value === null) return value;

  if (typeof value === "string" && value.includes(".")) {
    const splitted = value.split(".");
    return `${splitted[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")},${splitted[1]}`;
  } else {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
