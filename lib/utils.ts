import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function RandomNumber(): number {
  const min = 2000;
  const max = 20000;
  const num = Math.floor(Math.random() * (max - min) + min);
  console.log(num);
  return num;
}
