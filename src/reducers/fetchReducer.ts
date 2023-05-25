import { Reducer } from 'react';

type State<T> = {
  isLoading: boolean;
  data: T;
  error: string;
};

export enum ACTION_KIND {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

type Action<T> =
  | { type: ACTION_KIND.FETCH_START }
  | { type: ACTION_KIND.FETCH_SUCCESS; payload: T }
  | { type: ACTION_KIND.FETCH_ERROR; payload: '' };

export const factoryFetchReducer = <T>(data: T) => {
  const fetchReducer: Reducer<State<T>, Action<T>> = (state, action) => {
    switch (action.type) {
      case ACTION_KIND.FETCH_START:
        return {
          ...state,
          isLoading: true,
        };
      case ACTION_KIND.FETCH_SUCCESS:
        return {
          isLoading: false,
          data: action.payload,
          error: '',
        };
      case ACTION_KIND.FETCH_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const InitialState: State<T> = {
    isLoading: false,
    data,
    error: '',
  };

  return {
    fetchReducer,
    InitialState,
  };
};
