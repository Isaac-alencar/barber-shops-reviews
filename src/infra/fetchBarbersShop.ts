import { BarberShop } from "@/domain/BarberShop";
import { apiClient } from "./apiClient";

export const fetchBarbersShop = async (): Promise<BarberShop[]> => {
  try {
    const response = await apiClient().get("/barbershops");

    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
