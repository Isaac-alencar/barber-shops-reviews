import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";

// import { useFetch } from "@/hooks/useFetch";
// import { fetchBarbersShop } from "@/infra/fetchBarbersShop";

// import Error from "@/components/Error";
// import Loading from "@/components/Loading";

import { BarberShopList } from "@/components/BarberShopList";

import styles from "../styles/pages/Home.module.css";

export default function Home(props: any) {
  console.log(props);
  // const {
  //   data: barberShops,
  //   error,
  //   isLoading,
  // } = useFetch({
  //   queryFunction: fetchBarbersShop,
  //   initialData: [],
  // });

  // if (error) return <Error />;

  return (
    <main className={styles.container}>
      <h1>BarbersShop Review</h1>
      <BarberShopList barberShops={props.data} />
      {/* {isLoading ? <Loading /> : 
      } */}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.barber_shops.findMany();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};
