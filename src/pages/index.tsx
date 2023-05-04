import { fetchBarbersShop } from "@/infra/fetchBarbersShop";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import BarberShopList from "@/components/BarberShopList";

import { useFetch } from "@/hooks/useFetch";

import styles from "../styles/pages/Home.module.css";

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
      {isLoading ? <Loading /> : <BarberShopList barberShops={barberShops} />}
    </main>
  );
}
