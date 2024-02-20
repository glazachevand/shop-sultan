describe("Languages test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it("Test for changing languages on a catalog page", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    cy.get("h1").should("have.text", "Косметика и гигиена");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should(
      "have.text",
      "Косметика и гигиена",
    );
    cy.get('[data-testid="parameters"] h2').should("have.text", "ПОДБОР ПО ПАРАМЕТРАМ");

    cy.wait(3000);
    cy.get('[data-testid="english"]').click();
    const title1 = cy.get("h1");
    title1.should("not.have.text", "Косметика и гигиена");
    title1.should("have.text", "Cosmetics and hygiene");
    const breadcrumbsLast = cy.get('[data-testid="breadcrumbs-list"] li:last-child');
    breadcrumbsLast.should("not.have.text", "Косметика и гигиена");
    breadcrumbsLast.should("have.text", "Cosmetics and hygiene");
    const title2 = cy.get('[data-testid="parameters"] h2');
    title2.should("not.have.text", "ПОДБОР ПО ПАРАМЕТРАМ");
    title2.should("have.text", "SELECTION BY PARAMETERS");
    cy.wait(3000);
  });

  it("Test for changing languages on a cart page", () => {
    cy.visit("/cart", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "en");
      },
    });
    cy.get("h1").should("have.text", "Cart");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should("have.text", "Cart");
    cy.get('[class*="cartBottom"] > button > div').should("have.text", "Place an order");

    cy.wait(3000);
    cy.get('[data-testid="russian"]').click();
    cy.get("h1").should("have.text", "Корзина");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should("have.text", "Корзина");
    cy.get('[class*="cartBottom"] > button > div').should("have.text", "Оформить заказ");
    cy.wait(3000);
  });

  it("Test for changing languages on a header menu", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "en");
      },
    });
    cy.get("header nav ul li:first-child").should("have.text", "About company");

    cy.wait(3000);
    cy.get('[data-testid="russian"]').click();
    cy.get("header nav ul li:first-child").should("have.text", "О компании");
    cy.wait(3000);
  });
});
