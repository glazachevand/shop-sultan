describe("Filters test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
  });

  it("Categories test", () => {
    const category1 = cy.get('[class*="CategoryMenu_left"]').contains("Уход за телом");
    cy.wait(1000);

    // выбираем 1-ую категорию в категориях слева
    category1.click();
    cy.wait(2000);
    cy.scrollTo("top");
    cy.get('[class*="CategoryMenu_left"]')
      .contains("Уход за телом")
      .should("include.css", "color", "rgb(255, 200, 94)");
    cy.get('[class*="CategoryMenu_top"]')
      .contains("Уход за телом")
      .should("include.css", "color", "rgb(255, 200, 94)");
    cy.get('[class*="ProductShort_productShort__"]').each((el) => {
      expect(el.text()).to.include("Уход за телом");
    });

    // выбираем 2-ую категорию в категориях справа
    const category2 = cy.get('[class*="CategoryMenu_top"]').contains("Уход за лицом");
    category2.click();
    cy.wait(2000);
    cy.scrollTo("top");
    cy.get('[class*="CategoryMenu_left"]')
      .contains("Уход за лицом")
      .should("include.css", "color", "rgb(255, 200, 94)");
    cy.get('[class*="CategoryMenu_top"]')
      .contains("Уход за лицом")
      .should("include.css", "color", "rgb(255, 200, 94)");

    cy.get('[class*="ProductShort_productShort__"]').each((el) => {
      expect(el.text()).to.match(/Уход за телом|Уход за лицом/);
    });
    cy.wait(3000);
  });

  it("Parameters test", () => {
    // ввести диапазон цен от 100 до 1000
    const min = cy.get('input[name="priceRangeMin"]');
    const max = cy.get('input[name="priceRangeMax"]');
    min.clear().type("10");
    max.clear().type("100");
    cy.scrollTo("top");
    cy.wait(3000);
    cy.get('input[name="priceRangeMin"]').should("have.value", 100);
    cy.get('input[name="priceRangeMax"]').should("have.value", 1000);

    // выбираем производителя Synergetic
    const manufCheck = cy.get('[data-testid="checkboxList"]').contains(/Synergetic/i);
    manufCheck.click();
    cy.scrollTo("top");
    cy.wait(3000);
    cy.get('[name="Synergetic"]').should("have.checked");

    // Нажимаем на Показать
    cy.get('[data-testid="submitParameters"]').click();
    cy.scrollTo("top");
    cy.wait(3000);
    cy.get('[class*="ProductShort_productShort__"]').each((el) => {
      expect(el.text()).to.contain("Synergetic");
    });
    cy.wait(3000);
    cy.get('[class^="ProductShort_price__"]').each((el) => {
      const price = parseFloat(el.text());
      console.log("price", price);
      expect(price).to.be.within(100, 1000);
    });
    cy.wait(3000);
  });
});
