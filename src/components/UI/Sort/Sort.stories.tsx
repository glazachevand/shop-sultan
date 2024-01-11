import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "store/store";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { Sort } from "./Sort";

const preloadedState: Partial<RootState> = {
  filters: {
    typecare: [],
    priceMin: 10,
    priceMax: 10000,
    manufacturers: [],
    limit: 9,
    page: 1,
    sort: ["price", "asc"],
  },
}

const meta: Meta<typeof Sort> = {
  title: "UI/Sort",
  component: Sort,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Primary: Story = {
  decorators: [
    StoreDecorator(preloadedState)
  ]
};