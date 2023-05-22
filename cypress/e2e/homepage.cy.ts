describe("template spec", () => {
  it("should render a page heading title", () => {
    cy.visit("/");

    cy.get("h1").should("contain", "BarbersShop Review");
  });
});
