import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CustomDate } from "@/types/Utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: CustomDate): string {
  const month = date.month < 10 ? `0${date.month}` : `${date.month}`;
  return `${month}/${date.year}`;
}
