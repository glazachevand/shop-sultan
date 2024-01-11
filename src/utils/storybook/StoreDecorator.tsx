import { Provider } from "react-redux";
import { RootState, setupStore } from "store/store";
import { Story } from '@storybook/react';

export const StoreDecorator = (
  preloadedState: Partial<RootState>
) => (Story: Story) => (
  <Provider store={setupStore(preloadedState)} >
    <Story />
  </Provider>
)