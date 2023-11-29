import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Show: Story = {
  args: {
    text: "Показать",
    width: "216px",
    height: "59px",
  },
};

export const Order: Story = {
  args: {
    text: "Оформить заказ",
    width: "192px",
    height: "59px",
  },
};

export const OrderOK: Story = {
  args: {
    icon: "orderOK",
    form: "circ",
    width: "59px",
    height: "59px",
  },
};

export const Catalog: Story = {
  args: {
    text: "Каталог",
    icon: "catalog",
    width: "192px",
    height: "59px",
  },
};

export const PriceList: Story = {
  args: {
    text: "Прайс-лист",
    icon: "download",
    width: "200px",
    height: "59px",
  },
};

export const CartBig: Story = {
  args: {
    text: "В корзину",
    icon: "cart",
    width: "184px",
    height: "59px",
  },
};

export const CartSmall: Story = {
  args: {
    text: "В КОРЗИНУ",
    icon: "cart",
    form: "cartSmall",
    width: "153px",
    height: "45px",
  },
};

export const Remove: Story = {
  args: {
    icon: "remove",
    form: "circ",
    width: "59px",
    height: "59px",
  },
};

export const Green: Story = {
  args: {
    text: "популярное",
    form: "rectangle-green",
    color: "green",
    width: "96px",
    height: "25px",
  },
};

export const PriceListWhite: Story = {
  args: {
    text: "Прайс-лист",
    icon: "download",
    form: "rectangle",
    color: "white",
    width: "290px",
    height: "77px",
  },
};

export const Subscription: Story = {
  args: {
    icon: "subscr",
    form: "rectangle",
    color: "white",
    width: "77px",
    height: "77px",
  },
};

export const Minus: Story = {
  args: {
    text: "-",
    form: "minus",
    color: "pink-gradient",
    width: "auto",
    height: "auto",
  },
};

export const Plus: Story = {
  args: {
    text: "+",
    form: "minus",
    color: "pink-gradient",
    width: "34px",
    height: "auto",
  },
};

export const Price: Story = {
  args: {
    text: "10 000",
    form: "price",
    color: "pink-gradient",
    width: "105px",
    height: "auto",
  },
};

export const Back: Story = {
  args: {
    icon: "back",
    form: "circ",
    color: "ping",
    width: "32px",
    height: "32px",
  },
};

export const Down: Story = {
  args: {
    icon: "down",
    form: "circ",
    color: "mustard",
    width: "32px",
    height: "32px",
  },
};
export const Up: Story = {
  args: {
    icon: "up",
    form: "circ",
    color: "mustard",
    width: "32px",
    height: "32px",
  },
};
