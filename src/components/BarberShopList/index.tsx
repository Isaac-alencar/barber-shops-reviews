import { BarberShop } from "@/domain/BarberShop";
import { List } from "./List";

type BarberShopListProps = {
  barberShops: BarberShop[];
};

export default function BarberShopList({ barberShops }: BarberShopListProps) {
  return <List list={barberShops} />;
}
