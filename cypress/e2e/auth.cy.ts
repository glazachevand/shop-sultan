describe("NotFound page test", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("i18nextLng", "ru");
      },
    });
  });

  it("Test correct autorization", () => {
    const adminLogin = cy.get('[data-testid="adminLogin"]');
    adminLogin.find('[title="Войти как администратор"]').should("exist");
    cy.wait(3000);

    // Авторизация
    adminLogin.click();
    cy.contains(/Авторизация/i).should("be.visible");
    cy.wait(1000);
    cy.get('form[name="loginform"]').within(() => {
      cy.get('input[name="login"]').type("admin");
      cy.wait(1000);
      cy.get('input[name="password"]').type("12345");
      cy.wait(1000);
      cy.get('button[type="submit"]').click();
    });
    const adminLoginBtn = cy.get('[data-testid="adminLogin"]');
    adminLoginBtn.not('button[title="Войти как администратор"]');
    adminLoginBtn.find('button[title="Выйти"]');
    cy.get("h1").should("have.text", "Управление каталогом");
    cy.contains(/Добавить товар/i).should("exist");
    cy.contains(/Добавить категорию/i).should("exist");
    cy.get('[class^="CategoryItem"]')
      .first()
      .within(() => {
        cy.get('[title="Редактировать"]').should("exist");
        cy.get('[title="Удалить"]').should("exist");
      });
    cy.get('[class^="ProductShort_productShort"]')
      .first()
      .within(() => {
        cy.get("button").should("include.text", "Редактировать");
        cy.get('[alt="remove"]').should("exist");
        cy.get("button").should("not.include.text", "В корзину");
      });

    cy.wait(3000);

    // Выйти
    adminLoginBtn.click();
    cy.get("h1").should("have.text", "Косметика и гигиена");
    cy.contains(/Добавить товар/i).should("not.exist");
    cy.contains(/Добавить категорию/i).should("not.exist");
    cy.get('[class^="CategoryMenu_item"]')
      .first()
      .within(() => {
        cy.get('[title="Редактировать"]').should("not.exist");
        cy.get('[title="Удалить"]').should("not.exist");
      });
    cy.get('[class^="ProductShort_productShort"]')
      .first()
      .within(() => {
        cy.get("button").should("not.include.text", "Редактировать");
        cy.get('[alt="remove"]').should("not.exist");
        cy.get("button").should("include.text", "В корзину");
      });
    cy.wait(3000);
  });

  it("Test uncorrect autorization", () => {
    cy.wait(1000);
    cy.get('[data-testid="adminLogin"]').click();
    cy.get('form[name="loginform"]').within(() => {
      cy.get('input[name="login"]').type("admin");
      cy.wait(1000);
      cy.get('input[name="password"]').type("123");
      cy.wait(1000);
      cy.get('button[type="submit"]').click();
    });
    cy.contains(/Авторизация/i).should("be.visible");
    cy.contains(/Пароль или логин неверные/i);
    cy.wait(3000);
  });
});
