import type { CustomDate } from "@/types";

export function formatDate(date: CustomDate): string {
  const month = date.month < 10 ? `0${date.month}` : `${date.month}`;
  return `${month}/${date.year}`;
}
