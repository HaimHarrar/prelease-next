import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFetcher = async<T>(url: string, data?: object): Promise<T> => {
    const res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json"}, body: JSON.stringify(data) });
    return res.json();
};