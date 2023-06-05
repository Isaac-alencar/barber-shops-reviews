import axios, { AxiosRequestConfig } from "axios";

export const apiClient = (config?: AxiosRequestConfig) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    ...config,
  });
