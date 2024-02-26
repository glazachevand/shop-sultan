describe("Search test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
  });

  it("Test search from catalog page", () => {
    const search = cy.get('[data-testid="search"]');
    search.should("exist");
    cy.get('[data-testid="dropdown"]').should("not.exist");
    cy.wait(2000);

    // вводим для поиска bio
    search.find("input").type("bio");
    cy.scrollTo("top");
    cy.wait(3000);
    cy.get('[data-testid="dropdown"]').should("be.visible");
    cy.wait(3000);
    cy.get('[data-testid="dropdown"]>li').first().click();
    cy.wait(3000);
    cy.location("pathname").should("include", "/product/");
    cy.get('[class^="ProductFull_body__').contains(/bio/i);
    cy.wait(3000);
  });
});
