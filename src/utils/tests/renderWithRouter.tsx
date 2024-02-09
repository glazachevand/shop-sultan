import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { I18nextProvider } from "react-i18next";
import i18nForTests from "i18n/i18nForTests";

interface routerOptions {
  route?: string;
}

export const renderWithRouter = (component: ReactNode, options: routerOptions = {}) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}