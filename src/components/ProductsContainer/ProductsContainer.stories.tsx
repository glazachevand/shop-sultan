import type { Meta, StoryObj } from "@storybook/react";
import { RootState, } from "store/store";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { ProductsContainer } from "./ProductsContainer";

const preloadedState: Partial<RootState> = {
  products: {
    filteredProducts: [],
    categories: [],
    manufactures: [],
    countProducts: 17,
    minPrice: 10,
    maxPrice: 10000
  },
  filters: {
    typecare: [],
    priceMin: 10,
    priceMax: 10000,
    manufacturers: [],
    limit: 6,
    page: 2,
    sort: ["price", "desc"],
  }
}

const meta: Meta<typeof ProductsContainer> = {
  title: "Components/ProductsContainer",
  component: ProductsContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    withRouter,
    StoreDecorator(preloadedState)
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};