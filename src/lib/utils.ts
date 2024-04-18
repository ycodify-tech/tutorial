export function queryParamsBuilder(
  route: string,
  params: Record<string, string>
) {
  return `${route}?${new URLSearchParams(params).toString()}`;
}

export function dateToYcDateFormat(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function ycDateFormatToBrDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}
