import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RootState, setupStore } from 'store/store';
import { Provider } from "react-redux";

export interface componentRenderOptions {
  route?: string;
  preloadedState?: Partial<RootState>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    preloadedState,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={setupStore(preloadedState)}>
        {/*  <I18nextProvider i18n={i18nForTests}> */}
        {component}
        {/* </I18nextProvider>*/}
      </Provider>
    </MemoryRouter>
  );
}