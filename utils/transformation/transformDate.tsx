import { format } from "date-fns";
import es from "date-fns/locale/es";
import { parseISO } from "date-fns";
export function transformDate(datetime: string) {
  const formattedDate = format(parseISO(datetime), "dd LLL yyyy", {
    locale: es,
  }); // 'es' for Spanish locale

  return formattedDate;
}
