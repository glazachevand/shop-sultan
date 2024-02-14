import type { Meta, StoryObj } from "@storybook/react";
import { Parameters } from "./Parameters";
import { RootState, } from "store/store";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

const preloadedState: Partial<RootState> = {
  products: {
    filteredProducts: [],
    categories: [],
    manufactures: [
      ["Synergetic", 2],
      ["ООО 'БИГ'", 3],
      ["Клинса", 4],
      ["Тест", 2],
      ["BioMio", 1],
      ["Tresemme", 5],
      ["Consly", 1]
    ],
    countProducts: 0,
    minPrice: 10,
    maxPrice: 10000
  },
  filters: {
    typecare: [],
    priceMin: 100,
    priceMax: 5000,
    manufacturers: ["Клинса", "Consly"],
    limit: 9,
    page: 1,
    sort: ["price", "asc"],
  }
}

const meta: Meta<typeof Parameters> = {
  title: "Components/Parameters",
  component: Parameters,
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