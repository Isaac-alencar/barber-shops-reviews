import { BarberShop } from "@/domain/BarberShop";

import { Item } from "./Item";
import styles from "@/styles/components/BarberShopList/List.module.css";

type ListComponent<T> = {
  list: T[];
};

export const List = <T extends BarberShop>({ list }: ListComponent<T>) => (
  <ul className={styles.barbersShopList}>
    {list.map((items: T) => {
      return <Item {...items} key={items.id} />;
    })}
  </ul>
);
