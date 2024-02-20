describe("Cart page test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it("Test go to cart page from page of product", () => {
    cy.visit("/product/17", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    const cartBtn = cy.get('[class^="CartBtn"]');
    cartBtn.should("exist");
    cy.get("h1").should("include.text", "Шампунь для волос Ромашка");

    // добавление товара с id=17 в корзину
    cy.wait(3000);
    const addToCartBtn = cy.get('[class*="ProductFull_cartBtn"]');
    addToCartBtn.click();
    addToCartBtn.click();
    cy.scrollTo(0, 0);
    const cartCount = cy.get('[class^="CartBtn_cartCount"]');
    cartCount.should("have.text", "2");
    cy.get('[class^="CartBtn_cartPrice"]').should("include.text", "74");

    //Переход на страницу корзины
    cy.wait(3000);
    cartCount.click();
    cy.location("pathname").should("equal", "/cart");
    cy.get("h1").should("include.text", "Корзина");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should("have.text", "Корзина");
    cy.get("h2").should("include.text", "Шампунь для волос Ромашка");
    cy.get('[class*="price"]').should("include.text", "74 ₽");
    cy.wait(3000);
  });

  it("Test go to cart page from catalog page and order", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    // добавление товара с id=17 в корзину
    const product = cy.get('[href$="product/17"]').closest('[data-testid="productShort"]');
    product.should("include.text", "Шампунь для волос Ромашка");
    const btn = product.contains("В корзину");
    cy.wait(1000);
    btn.click();
    btn.click();
    cy.scrollTo(0, 0);
    const cartCount = cy.get('[class^="CartBtn_cartCount"]');
    cartCount.should("have.text", "2");
    cy.get('[class^="CartBtn_cartPrice"]').should("include.text", "74");

    //Переход на страницу корзины
    cy.wait(3000);
    cartCount.click();
    cy.location("pathname").should("equal", "/cart");
    cy.get("h1").should("include.text", "Корзина");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should("have.text", "Корзина");
    cy.get("h2").should("include.text", "Шампунь для волос Ромашка");
    cy.get('[class*="priceTotal"]').should("include.text", "74 ₽");

    // заказ
    cy.wait(3000);
    cy.contains(/Спасибо за заказ/i).should("not.be.visible");
    cy.contains(/Оформить заказ/i).click();
    cy.get('[class*="orderModal"]')
      .closest('[data-testid="modal"]')
      .should("have.css", "opacity", "1");
    cy.contains(/Спасибо за заказ/i).should("be.visible");

    // закрыть модалку
    cy.wait(3000);
    cy.contains(/Оформить заказ/i).should("not.be.disabled");
    cy.get('[class*="orderModal"]')
      .closest('[class^="Modal_content"]')
      .find('[data-testid="closeBtn"]')
      .click();
    cy.get('[class*="orderModal"]')
      .closest('[data-testid="modal"]')
      .should("have.css", "opacity", "0");
    cy.contains(/Спасибо за заказ/i).should("not.be.visible");
    cy.contains(/Оформить заказ/i).should("be.disabled");
    cy.wait(3000);
  });
});
