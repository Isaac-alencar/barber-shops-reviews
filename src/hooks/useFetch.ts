import { useEffect, useReducer } from 'react';

import { ACTION_KIND, fetchReducer } from '@/reducers/fetchReducer';

type UseFetchParams<T> = {
  queryFunction: () => Promise<T>;
  initialData: T;
};

export const useFetch = <T>({
  queryFunction,
  initialData,
}: UseFetchParams<T>) => {
  const initialState = {
    isLoading: false,
    data: initialData,
    error: '',
  };

  const [state, dispatch] = useReducer(fetchReducer<T>, initialState);

  useEffect(() => {
    dispatch({ type: ACTION_KIND.FETCH_START });

    queryFunction()
      .then((data) => {
        dispatch({ type: ACTION_KIND.FETCH_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTION_KIND.FETCH_ERROR, payload: error.message });
      });
  }, [queryFunction]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
