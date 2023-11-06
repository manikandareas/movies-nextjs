import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToMaxLengthDescription(
  description: string,
  maxLength: number
) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}
