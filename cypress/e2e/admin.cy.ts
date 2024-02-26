describe("Admin test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
        win.localStorage.setItem("auth-token", "123456qwerty");
      },
    });
  });

  it("Test add, edit and remove product", () => {
    const addBtn = cy.contains(/Добавить товар/i);
    cy.wait(1000);
    addBtn.should("exist");

    // добавление товара
    addBtn.click();
    cy.wait(3000);
    cy.get('[class*="Modal_opened__"]')
      .first()
      .within(() => {
        cy.get('[name= "title"]').type("Шампунь для волос");
        cy.wait(1000);
        cy.get('[name= "url"]').clear().type("product2.webp");
        cy.wait(1000);
        cy.get('[name= "brand"]').type("Garnier");
        cy.wait(1000);
        cy.get('[name= "barcode"]').clear().type("668000000000");
        cy.wait(1000);
        cy.get('[name= "manufacturer"]').type("Garnier");
        cy.wait(1000);
        cy.get('[name= "description"]').type(
          "Garnier стремится постоянно улучшать экологическое и социальное воздействие наших продуктов на протяжении всего их жизненного цикла. Это подразумевает постоянное совершенствование на всех фазах производства и использования",
        );
        cy.wait(1000);
        cy.get("#volume1").check();
        cy.wait(1000);
        cy.get('[name= "size"]').type("200");
        cy.wait(1000);
        cy.get('[data-testid="checkbox"]').contains("Уход за волосами").click();
        cy.get('[data-testid="checkbox"]').contains("Подарочные наборы").click();
        cy.wait(1000);
        cy.get('button[type="submit"]').contains("Сохранить").click();
        cy.wait(1000);
        cy.scrollTo("top");
      });

    const product = cy.contains("668000000000").first().closest('[data-testid="productShort"]');
    product.should("exist");
    product.within(() => {
      cy.contains("Шампунь для волос");
      cy.contains("Garnier");
      cy.get('[class="product__properties"]').contains("Уход за волосами");
      cy.get('[class="product__properties"]').contains("Подарочные наборы");
      cy.get('[class^="ProductShort_price"]').contains("10 ₽");
    });
    cy.wait(3000);

    // редактирование товара
    product.get("button").contains("Редактировать").click();
    cy.get('[class*="Modal_opened__"]')
      .first()
      .within(() => {
        cy.get('[name= "title"]').clear().type("Шампунь для объема волос");
        cy.wait(1000);
        cy.get('[name= "barcode"]').clear().type("668000000001");
        cy.wait(1000);
        cy.get('button[type="submit"]').contains("Сохранить").click();
        cy.wait(1000);
        cy.scrollTo("top");
      });
    const product = cy.contains("668000000001").first().closest('[data-testid="productShort"]');
    product.should("exist");
    product.within(() => {
      cy.contains("Шампунь для объема волос");
      cy.contains("Garnier");
      cy.get('[class="product__properties"]').contains("Уход за волосами");
    });
    cy.wait(3000);

    // удаление товара
    const product = cy.contains("668000000001").first().closest('[data-testid="productShort"]');
    cy.scrollTo("top");
    product.find('button[data-testid="removeBtn"]').click();
    cy.contains("668000000001").should("not.exist");
    cy.scrollTo("top");
    cy.wait(3000);
  });

  it("Test add, edit and remove category", () => {
    const addBtn = cy.contains(/Добавить категорию/i);
    cy.wait(1000);
    addBtn.should("exist");

    // добавление категории
    addBtn.click();
    const newItem = cy.get('[class*="CategoryItem_addItem__"]').should("be.visible");
    newItem.within(() => {
      const saveBtn = cy.get('[title="Сохранить"]');
      saveBtn.should("exist");
      cy.get("input").type("Дезодоранты");
      saveBtn.click();
    });
    cy.wait(3000);
    const listCategories = cy.get('[class*="CategoryMenu_admin__"]');
    const findValue = listCategories.find('[value="Дезодоранты"]');
    findValue.should("exist");
    cy.wait(3000);

    // редактирование категории
    let item = findValue.closest("li");
    item.find('[title="Редактировать"]').click();
    let input = cy.get('input[value="Дезодоранты"]').first();
    item = input.closest("li");
    input.type(" для женщин");
    item.find('[title="Сохранить"]').click();
    cy.wait(3000);
    input = cy.get('input[value="Дезодоранты для женщин"]');
    input.should("exist");

    // удаление категории
    item = input.closest("li");
    item.find('[title="Удалить"]').click();
    cy.get('input[value="Дезодоранты для женщин"]').should("not.exist");
    cy.wait(3000);
  });
});
