import axios, { AxiosRequestConfig } from "axios";

export const apiClient = (config?: AxiosRequestConfig) =>
  axios.create({
    baseURL: "https://barber-shops-reviews.vercel.app/api/",
    ...config,
  });
