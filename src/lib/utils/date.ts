import { formatDistanceToNow, parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export const getDateDistance = (date: string) =>
  formatDistanceToNow(parseISO(date), {
    addSuffix: true,
    locale: es,
  });

export const formatDate = (
  date: string,
  formatDate: "long" | "short" = "long"
) => {
  const parseDate = parseISO(date);
  if (formatDate === "short") {
    return format(parseDate, "d 'de' MMMM 'de' yyyy", { locale: es });
  }

  return format(parseDate, "EEEE, d 'de' MMMM 'de' yyyy h:mm a", {
    locale: es,
  });
};
