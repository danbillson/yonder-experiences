import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Experience } from "./experiences";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateValue(exp: Experience) {
  const [value] = exp.redeemValues;
  return (value.value / value.points) * 1000;
}
