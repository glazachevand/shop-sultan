import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { CartItem } from "./CartItem";

const meta: Meta<typeof CartItem> = {
  title: "Components/CartList/CartItem",
  component: CartItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    withRouter,
    StoreDecorator({})
  ]
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Primary: Story = {
  render: () => {
    const cartItem = {
      id: 2,
      title: "Шампунь beauty-full volume плотность и объем",
      url: "product2.webp",
      barcode: 4704049097548,
      manufacturer: "Tresemme",
      brand: "Tresemme",
      description: "",
      typesize: "объем",
      size: "650 мл",
      typecare: [
        "Уход за волосами"
      ],
      price: 419,
      count: 3
    }
    return <CartItem cartItem={cartItem} />
  }
}