import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "store/store";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { Pagination } from "./Pagination";

const preloadedState: Partial<RootState> = {
  filters: {
    typecare: [],
    priceMin: 10,
    priceMax: 10000,
    manufacturers: [],
    limit: 9,
    page: 2,
    sort: ["price", "asc"],
  },
}

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    productsCount: 28
  },
  decorators: [
    StoreDecorator(preloadedState)
  ]
};