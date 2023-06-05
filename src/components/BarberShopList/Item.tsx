import styles from '@/styles/components/BarberShopList/Item.module.css';
import Link from 'next/link';

type Item = {
  id: number;
  name: string;
  address: string;
};

export const Item = ({ id, address, name }: Item) => {
  return (
    <Link href={`/barber_shops/${id}`}>
      <li className={styles.card}>
        <strong className={styles.name}>{name}</strong>
        <span className={styles.address}>{address}</span>
      </li>
    </Link>
  );
};
