import type { Meta, StoryObj } from "@storybook/react";
import { CartBtn } from "./CartBtn";
import { RootState, } from "store/store";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

const preloadedState: Partial<RootState> = {
  cart: {
    items: [],
    totalPrice: 20000,
    totalCounts: 2
  },
}

const meta: Meta<typeof CartBtn> = {
  title: "UI/CartBtn",
  component: CartBtn,
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

export const WithText: Story = {
  args: {
    isText: true
  },
};

export const WithoutText: Story = {
  args: {
    isText: false
  }
};