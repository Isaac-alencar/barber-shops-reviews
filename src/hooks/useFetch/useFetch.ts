import { useCallback, useEffect, useReducer } from "react";
import { fetchReducer } from "./reducers/fetchReducer";

type UseFetchParams<T> = {
  queryFunction: () => Promise<T>;
  initialData: T;
};

export const useFetch = <T>({
  queryFunction,
  initialData,
}: UseFetchParams<T>) => {
  const initialState = {
    data: initialData,
    isLoading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const initRequest = () => dispatch({ type: "INITIALIZE_REQUEST" });
  const finishRequest = () => dispatch({ type: "FINISH_REQUEST" });

  const onSuccess = useCallback((data: T) => {
    dispatch({ type: "SUCCESS", payload: data });
  }, []);

  const onError = useCallback((error: string) => {
    dispatch({ type: "ERROR", payload: error });
  }, []);

  useEffect(() => {
    initRequest();

    queryFunction()
      .then((data) => {
        onSuccess(data);
      })
      .catch((error: Error) => {
        onError(error.message);
      })
      .finally(() => finishRequest());
  }, [queryFunction, onError, onSuccess]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
