import axios, { AxiosRequestConfig } from "axios";

export const apiClient = (config?: AxiosRequestConfig) =>
  axios.create({
    baseURL: " http://localhost:3000/",
    ...config,
  });