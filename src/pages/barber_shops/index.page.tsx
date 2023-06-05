import { useFetch } from '@/hooks/useFetch';
import { fetchBarbersShop } from '@/infra/fetchBarbersShop';

import Error from '@/components/Error';
import Loading from '@/components/Loading';
import Layout from '@/components/Layout';
import { BarberShopList } from '@/components/BarberShopList';

export default function Home() {
  const {
    data: barberShops,
    error,
    isLoading,
  } = useFetch({
    queryFunction: fetchBarbersShop,
    initialData: [],
  });

  if (error) return <Error />;

  return (
    <Layout>
      <>
        <h1>BarbersShop Review</h1>
        {isLoading ? <Loading /> : <BarberShopList barberShops={barberShops} />}
      </>
    </Layout>
  );
}
