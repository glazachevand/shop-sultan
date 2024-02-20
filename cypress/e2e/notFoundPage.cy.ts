describe("NotFound page test", () => {
  cy.clearAllLocalStorage();
  it("Test uncorrect location", () => {
    cy.visit("/qwerty", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
    cy.get("h1").should("include.text", "Страница не найдена");
    cy.get('[data-testid="breadcrumbs-list"] li:last-child').should("have.text", "Страница 404");
    cy.wait(3000);
  });
});
