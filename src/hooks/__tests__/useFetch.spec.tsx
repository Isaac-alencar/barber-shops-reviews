import { act, renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../useFetch';

describe('useFetch', () => {
  it('calls the core function one time', async () => {
    const queryFn = jest.fn().mockResolvedValue('');

    renderHook(() =>
      useFetch({
        queryFunction: queryFn,
        initialData: [],
      })
    );

    await waitFor(() => {
      expect(queryFn).toBeCalledTimes(1);
    });
  });

  describe('When successfully fetches the API', () => {
    it('should return the expected data', async () => {
      const queryFn = jest.fn().mockResolvedValue(['testing']);

      const { result } = renderHook(() =>
        useFetch({
          queryFunction: queryFn,
          initialData: [],
        })
      );

      expect(result.current.data).toEqual([]);
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.error).toEqual('');

      await waitFor(() => {
        expect(result.current.data).toEqual(['testing']);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.error).toEqual('');
      });
    });
  });

  describe('When the API request fails', () => {
    it('should return an error message', async () => {
      const queryFn = jest.fn().mockRejectedValue(new Error('Error'));
      const initialData: never[] = [];
      const { result } = renderHook(() =>
        useFetch({
          queryFunction: queryFn,
          initialData,
        })
      );

      expect(result.current.error).toEqual('');
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.data).toEqual(initialData);

      await waitFor(() => {
        expect(result.current.error).toEqual('Error');
        expect(result.current.isLoading).toBe(false);
        expect(result.current.data).toEqual(initialData);
      });
    });
  });
});
