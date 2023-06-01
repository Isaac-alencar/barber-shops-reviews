type State<T> = {
  isLoading: boolean;
  data: T;
  error: string;
};

type Action<T> =
  | { type: ACTION_KIND.FETCH_START }
  | { type: ACTION_KIND.FETCH_SUCCESS; payload: T }
  | { type: ACTION_KIND.FETCH_ERROR; payload: '' };

export enum ACTION_KIND {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export const fetchReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
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
