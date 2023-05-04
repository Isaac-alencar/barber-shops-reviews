import { useEffect, useState } from "react";

import { fetchBarbersShop } from "@/infra/fetchBarbersShop";

import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useFetch } from "@/hooks/useFetch";

import styles from "../styles/pages/Home.module.css";

type BarberShop = {
  id: number;
  name: string;
  address: string;
};

const BarberShopList = ({ barberShops }: { barberShops: BarberShop[] }) =>
  <>{barberShops.map(({ address, name, id }) => {
    return (
      <div className={styles.card} key={id}>
        <strong className={styles.name}>{name}</strong>
        <span className={styles.address}>{address}</span>
      </div>
    );
  })}</>

export default function Home() {
  const {
    data: barberShops,
    error,
    isLoading
  } = useFetch({ queryFunction: fetchBarbersShop });

  if (error) return <Error />

  return (
    <main className={styles.container}>
      <h1>BarbersShop Review</h1>
      <div className={styles.barbersShopList}>
        {isLoading ? <Loading /> : <BarberShopList barberShops={barberShops} />}
      </div>
    </main>
  );
}
