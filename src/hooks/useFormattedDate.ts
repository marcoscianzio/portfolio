import { parseISO } from "date-fns";
import format from "date-fns/format";
import enUS from "date-fns/locale/en-US";
import es from "date-fns/locale/es";
import { useRouter } from "next/router";

export const useFormattedDate = (date: string) => {
  const router = useRouter();

  const parsedDate = parseISO(date);

  const formattedDate = format(parsedDate, "	LLL ii, y", {
    locale: router.locale === "en-US" ? enUS : es,
  });

  return {
    formattedDate,
  };
};
