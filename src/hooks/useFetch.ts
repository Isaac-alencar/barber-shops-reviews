import { useEffect, useState } from "react"

type UseFetchParams = {
  queryFunction: () => Promise<any>;
}

export const useFetch = ({ queryFunction }: UseFetchParams) => {
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);

    queryFunction().then((data) => {
      setData(data)
    }).catch((error) => {
      setError((error as Error).message);
    })
    .finally(() => setIsLoading(false))
  }, [queryFunction]);

  return {
    data,
    isLoading,
    error
  }
}
