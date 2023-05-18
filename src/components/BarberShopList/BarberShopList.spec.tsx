import { render, within } from "@testing-library/react";
import { BarberShop } from "@/domain/BarberShop";
import { BarberShopList } from ".";

const mockedList: BarberShop[] = [
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
];

describe("<BarberShopList />", () => {
  it("renders a list of barber shop cards", () => {
    const { getByRole, getAllByRole } = render(
      <BarberShopList barberShops={mockedList} />
    );

    const barberList = getByRole("list");
    const barberListItem = within(barberList).getAllByRole("listitem");

    expect(barberListItem).toHaveLength(2);
  });
});
