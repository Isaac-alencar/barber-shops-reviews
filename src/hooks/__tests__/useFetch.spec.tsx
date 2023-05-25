import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../useFetch/useFetch";

describe("useFetch", () => {
  describe("When successfully fetches the API", () => {
    it("should return the expected data", async () => {
      const queryFn = jest.fn().mockReturnValue(Promise.resolve(["testing"]));

      const { result } = renderHook(() =>
        useFetch({
          queryFunction: queryFn,
          initialData: [],
        })
      );

      expect(result.current.data).toEqual([]);
      await waitFor(() => {
        expect(queryFn).toBeCalledTimes(1);
      });
      expect(result.current.data).toEqual(["testing"]);
    });
  });

  describe.only("When the API request fails", () => {
    it("should return an error message", async () => {
      const queryFn = jest
        .fn()
        .mockReturnValue(Promise.reject({ message: "Error" }));

      const { result } = renderHook(() =>
        useFetch({
          queryFunction: queryFn,
          initialData: [],
        })
      );

      expect(result.current.error).toEqual("");
      await waitFor(() => {
        expect(queryFn).toBeCalledTimes(1);
        expect(result.current.isLoading).toBe(false);
      });
      expect(result.current.error).toEqual("Error");
    });
  });
});
