export type State<T> = {
  data: T;
  isLoading: boolean;
  error: string;
};

type Action = {
  type: string;
  payload?: any;
};

type ReducerFunction = <S extends State<S>>(state: S, action: Action) => S;

export const fetchReducer: ReducerFunction = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FINISH_REQUEST":
      return {
        ...state,
        isLoading: false,
      };
    case "SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
