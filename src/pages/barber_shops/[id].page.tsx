import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

export default function Page() {
  const router = useRouter();
  
  return (
    <Layout>
      <p>Post: {router.query.id}</p>
    </Layout>
  );
}
