import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axios = Axios.create(
    {
        headers: {
            "Content-Type": "application/json",
        },
    },
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getFetcher = async<T>(url: string, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> => axios.get(url, params)

const postFetcher = async<T>(url: string, data: unknown, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> => axios.post(url, data, params);

export {
    getFetcher,
    postFetcher
}