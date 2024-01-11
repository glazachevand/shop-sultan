import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "store/store";
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from "utils/storybook/StoreDecorator";
import { CategoryMenu } from "./CategoryMenu";

const preloadedState: Partial<RootState> = {
  products: {
    filteredProducts: [],
    categories: [
      {
        "id": 1,
        "title": "Уход за телом"
      },
      {
        "id": 2,
        "title": "Уход за руками"
      },
      {
        "id": 3,
        "title": "Уход за ногами"
      },
      {
        "id": 4,
        "title": "Уход за лицом"
      },
      {
        "id": 5,
        "title": "Уход за волосами"
      },
    ],
    manufactures: [],
  },
  filters: {
    typecare: ["Уход за волосами"],
    priceMin: 10,
    priceMax: 10000,
    manufacturers: [],
    limit: 9,
    page: 1,
    sort: ["price", "asc"],
  }
}

const meta: Meta<typeof CategoryMenu> = {
  title: "UI/CategoryMenu",
  component: CategoryMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter, StoreDecorator(preloadedState)],
};

export default meta;
type Story = StoryObj<typeof CategoryMenu>;

export const Top: Story = {
  args: {
    type: 'top'
  },
};
export const Left: Story = {
  args: {
    type: 'left'
  },
};
export const Admin: Story = {
  args: {
    type: 'admin'
  },
};