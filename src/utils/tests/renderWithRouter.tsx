import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';


interface routerOptions {
  route?: string;
}

export const renderWithRouter = (component: ReactNode, options: routerOptions = {}) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>
  )
}