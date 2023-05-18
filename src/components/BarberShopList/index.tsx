import { BarberShop } from "@/domain/BarberShop";
import { List } from "./List";

type BarberShopListProps = {
  barberShops: BarberShop[];
};

export const BarberShopList = ({ barberShops }: BarberShopListProps) => {
  return <List list={barberShops} />;
};
