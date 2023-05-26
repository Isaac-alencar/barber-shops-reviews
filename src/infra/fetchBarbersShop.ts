import { BarberShop } from "@/domain/BarberShop";
import { apiClient } from "./apiClient";

export const fetchBarbersShop = async (): Promise<BarberShop[]> => {
  try {
    const { get } = apiClient();

    const response = await get("/barber_shops");

    return response.data.allBarberShops;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
