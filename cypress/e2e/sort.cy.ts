const { _ } = Cypress;

describe("Sort test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
  });

  it("Test render catalog page with sorting (price ascending)", () => {
    const sort = cy.get('[data-testid="sort"]');
    sort.should("exist");
    sort.contains("Цена (по возрастанию)");

    const elemsToPriceObjects = (items) => {
      return _.map(items, (item) => parseFloat(item.textContent));
    };

    cy.get('[class^="ProductShort_price__"]')
      .then(elemsToPriceObjects)
      .then((prices) => {
        console.table(prices);
        const sortedArr = prices.sort((a, b) => a - b);
        console.table(sortedArr);
        expect(sortedArr, "items are sorted 📈").to.deep.equal(prices);
      });
    cy.wait(3000);
  });

  it("Test price descending", () => {
    const sort = cy.get('[data-testid="sort"]');
    cy.get('[data-testid="popup"]').should("not.be.visible");

    sort.click();
    cy.scrollTo(0, 0);
    cy.wait(2000);
    const popup = cy.get('[data-testid="popup"]');
    popup.should("be.visible");
    popup.find('label[for="price_desc"]').click();
    cy.scrollTo(0, 0);
    cy.get('[data-testid="sort"]').should("include.text", "Цена (по убыванию)");

    const elemsToPriceObjects = (items) => {
      return _.map(items, (item) => parseFloat(item.textContent));
    };

    cy.get('[class^="ProductShort_price__"]')
      .then(elemsToPriceObjects)
      .then((prices) => {
        console.table(prices);
        const sortedArr = prices.sort((a, b) => b - a);
        console.table(sortedArr);
        expect(sortedArr, "items are sorted 📈").to.deep.equal(prices);
      });
    cy.wait(3000);
  });

  it("Test title ascending", () => {
    const sort = cy.get('[data-testid="sort"]');
    sort.click();
    cy.scrollTo(0, 0);
    cy.wait(2000);
    const popup = cy.get('[data-testid="popup"]');
    popup.find('label[for="brand_asc"]').click();
    cy.scrollTo(0, 0);
    cy.get('[data-testid="sort"]').should("include.text", "Название (по возрастанию)");

    const elemsToTitleObjects = (items) => {
      return _.map(items, (item) => item.textContent);
    };

    cy.get('[class^="ProductShort_title__"]')
      .then(elemsToTitleObjects)
      .then((titles) => {
        console.table(titles);
        const sortedArr = titles.sort();
        console.table(sortedArr);
        expect(sortedArr, "items are sorted 📈").to.deep.equal(titles);
      });
    cy.wait(3000);
  });

  it("Test title descending", () => {
    const sort = cy.get('[data-testid="sort"]');
    sort.click();
    cy.scrollTo(0, 0);
    cy.wait(2000);
    const popup = cy.get('[data-testid="popup"]');
    popup.find('label[for="brand_desc"]').click();
    cy.scrollTo(0, 0);
    cy.get('[data-testid="sort"]').should("include.text", "Название (по убыванию)");

    const elemsToTitleObjects = (items) => {
      return _.map(items, (item) => item.textContent);
    };

    cy.get('[class^="ProductShort_title__"]')
      .then(elemsToTitleObjects)
      .then((titles) => {
        console.table(titles);
        const sortedArr = titles.sort().reverse();
        console.table(sortedArr);
        expect(sortedArr, "items are sorted 📈").to.deep.equal(titles);
      });
    cy.wait(3000);
  });
});
