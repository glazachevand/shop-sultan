describe("FullProduct page test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it("Test render product", () => {
    cy.visit("/product/17", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    cy.get("h1").should("include.text", "Шампунь для волос Ромашка");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should(
      "have.text",
      "Шампунь для волос Ромашка",
    );
    cy.get("h4:last-of-type").should("include.text", "Тип ухода");
    cy.get('[class*="price"]').should("include.text", "37 ₽");
    cy.get('[class*="cartBtn"]').should("include.text", "В корзину");
    cy.wait(3000);
  });

  it("Test add product to cart", () => {
    cy.visit("/product/17", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    const plus = cy.get('[data-testid="plus"]');
    plus.should("exist");
    const addToCartBtn = cy.get('[class*="ProductFull_cartBtn"]');
    addToCartBtn.should("exist");
    cy.get('[class^="CartBtn"]').should("exist");

    plus.click();
    cy.scrollTo(0, 0);
    cy.get('[class^="CartBtn_cartCount"]').should("have.text", "1");
    cy.get('[class^="CartBtn_cartPrice"]').should("include.text", "37");
    cy.wait(3000);

    addToCartBtn.click();
    cy.scrollTo(0, 0);
    cy.get('[class^="CartBtn_cartCount"]').should("have.text", "2");
    cy.get('[class^="CartBtn_cartPrice"]').should("include.text", "74");
    cy.wait(3000);
  });

  it("Test go to product page from catalog page", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    const product = cy.get('[href$="product/17"]').first();
    product.should("be.visible");
    product.click();
    cy.location("pathname").should("equal", "/product/17");
    cy.get("h1").should("include.text", "Шампунь для волос Ромашка");
    cy.wait(3000);
  });

  it("Test go to product page from cart page", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "en");
      },
    });
    const product = cy.get('[href$="product/16"]').closest('[data-testid="productShort"]');
    product.should("include.text", "Бальзам для волос оттеночный Шоколад");
    const btn = product.contains(/Add to cart/i);
    cy.wait(3000);

    // добавление в корзину
    btn.click();
    cy.scrollTo(0, 0);
    cy.wait(3000);

    // переход на страницу корзины
    cy.get('[class^="CartBtn_cartCount"]').click();
    cy.location("pathname").should("equal", "/cart");
    cy.wait(3000);

    // переход на страницу товара
    cy.contains(/Бальзам для волос оттеночный Шоколад/i).click();
    cy.location("pathname").should("equal", "/product/16");
    cy.wait(3000);
  });
});
