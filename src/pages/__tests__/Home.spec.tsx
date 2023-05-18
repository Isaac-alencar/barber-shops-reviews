import { render, within } from "@testing-library/react";
import Home from "@/pages/";

import { useFetch } from "@/hooks/useFetch";
jest.mock("../../../hooks/useFetch");

type useFetchType = typeof useFetch;
type useFetchReturnType = ReturnType<useFetchType>;

const useFetchInitialData = {
  data: [],
  error: "",
  isLoading: false,
};

const mockUseFetch = (values: Partial<useFetchReturnType> = {}) => {
  const mockedHook = useFetch as jest.MockedFn<useFetchType>;

  mockedHook.mockReturnValue({ ...useFetchInitialData, ...values });
};

describe("<Home />", () => {
  describe("When successfully render the page", () => {
    beforeEach(() => {
      mockUseFetch({
        data: [
          {
            id: 1,
            name: "Game Day Barber",
            address: "890 Wuckert Overpass, Royal Court",
          },
          {
            id: 2,
            name: "Straight Razors",
            address: "511 Gibson Village, Summer Square",
          },
          {
            id: 3,
            name: "Muscle Cuts",
            address: "32594 Hermiston Prairie, Willow Acres",
          },
        ],
      });
    });

    it("renders a 'BarbersShop Review' heading", () => {
      const { getByRole } = render(<Home />);

      const heading = getByRole("heading", { level: 1 });

      expect(heading.textContent).toEqual("BarbersShop Review");
    });

    it("renders a baber shop list", () => {
      const { getByRole, getAllByRole } = render(<Home />);

      const barberList = getByRole("list");
      const barberListItem = within(barberList).getAllByRole("listitem");

      expect(barberListItem).toHaveLength(3);
      expect(barberListItem[0].textContent).toEqual(
        "Game Day Barber890 Wuckert Overpass, Royal Court"
      );
      expect(barberListItem[1].textContent).toEqual(
        "Straight Razors511 Gibson Village, Summer Square"
      );
      expect(barberListItem[2].textContent).toEqual(
        "Muscle Cuts32594 Hermiston Prairie, Willow Acres"
      );
    });
  });

  describe("When barber list are not available yet", () => {
    beforeEach(() => {
      mockUseFetch({
        isLoading: true,
      });
    });

    it("renders the Loading component", () => {
      const { getAllByRole } = render(<Home />);

      const loadingText = getAllByRole("heading", {
        level: 1,
      });

      expect(loadingText[1]).toBeInTheDocument();
      expect(loadingText[1].textContent).toEqual("Loading...");
    });
  });

  describe("When page can't load the barber list", () => {
    beforeEach(() => {
      mockUseFetch({
        error: "Something went wrong :/",
        isLoading: false,
      });
    });

    it("renders the Error component", () => {
      const { queryByRole } = render(<Home />);

      const errorMsg = queryByRole("heading", { level: 1 });

      expect(errorMsg?.textContent).toEqual("Something went wrong :/");
    });
  });
});
