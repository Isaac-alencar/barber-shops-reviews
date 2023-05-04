import styles from "@/styles/components/BarberShopList/Item.module.css";

type Item = {
  name: string;
  address: string;
};

export const Item = ({ address, name }: Item) => {
  return (
    <li className={styles.card}>
      <strong className={styles.name}>{name}</strong>
      <span className={styles.address}>{address}</span>
    </li>
  );
};
