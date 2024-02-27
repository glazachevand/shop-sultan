const { _ } = Cypress;

describe("Pagination test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/");
  });

  it("Test click to page 2", () => {
    const list = cy.get('[class^="Pagination_list"]');
    const firstPage = cy.get('[class^="Pagination_list"] li').first();
    firstPage.should("have.text", "1");
    list.find('[class*="active"]').should("have.text", "1");
    const productsTitle1 = cy.get('[class^="ProductShort_productShort__"] h3');

    const getTitle = (items) => {
      return _.map(items, (item) => item.textContent);
    };

    const titles1 = getTitle(productsTitle1);
    cy.scrollTo("bottom");
    cy.wait(2000);

    const secondPage = cy.get('[class^="Pagination_list"]>li:last-child()');
    secondPage.should("have.text", "2");
    secondPage.click();
    cy.get('[class^="Pagination_list"]').find('[class*="active"]').should("have.text", "2");
    const productsTitle2 = cy.get('[class^="ProductShort_productShort__"] h3');

    productsTitle2.then(getTitle).then((res) => {
      console.log("titles1", titles1);
      console.log("titles2", res);
      expect(titles1).not.to.deep.equal(res);
    });
    cy.wait(3000);
  });
});
