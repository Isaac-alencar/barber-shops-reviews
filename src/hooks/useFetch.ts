import { useEffect, useState } from "react";

type UseFetchParams<T> = {
  queryFunction: () => Promise<T>;
  initialData: T;
};
export const useFetch = <T>({
  queryFunction,
  initialData,
}: UseFetchParams<T>) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);

    queryFunction()
      .then((data) => {
        setData(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [queryFunction]);

  return {
    data,
    isLoading,
    error,
  };
};
