import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
  //initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/catalog',
    //initialState,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      {/* <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}> */}
      {component}
      {/* </I18nextProvider>
      </StoreProvider> */}
    </MemoryRouter>
  );
}