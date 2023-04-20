import Head from "next/head";
import { useEffect, useState } from "react";

import { fetchBarbersShop } from "@/infra/fetchBarbersShop";

import Loading from "@/components/Loading";
import Error from "@/components/Error";

import styles from "../styles/pages/Home.module.css";

type BarberShop = {
  id: number;
  name: string;
  address: string;
};

export default function Home() {
  const [barberShops, setBarberShops] = useState<BarberShop[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);

    fetchBarbersShop()
      .then((data) => {
        setIsLoading(false);
        setBarberShops(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError((error as Error).message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {barberShops && (
        <>
          <Head>
            <title>Barbershop Reviews | Home </title>
          </Head>
          <main className={styles.container}>
            <h1>BarbersShop Review</h1>
            <div className={styles.barbersShopList}>
              {barberShops.map(({ address, name, id }) => {
                return (
                  <div className={styles.card} key={id}>
                    <strong className={styles.name}>{name}</strong>
                    <span className={styles.address}>{address}</span>
                  </div>
                );
              })}
            </div>
          </main>
        </>
      )}
    </>
  );
}
