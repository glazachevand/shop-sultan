import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Button",
  },
};

export const Catalog: Story = {
  args: {
    text: "Каталог",
    icon: "catalog",
    className: "catalog",
  },
};

export const PriceList: Story = {
  args: {
    text: "Прайс-лист",
    icon: "download",
  },
};

export const Cart: Story = {
  args: {
    text: "В КОРЗИНУ",
    icon: "cart",
  },
};

export const Remove: Story = {
  args: {
    icon: "remove",
  },
};

export const Circ: Story = {
  args: {
    form: "circ",
  },
};

export const Green: Story = {
  args: {
    form: "rectangle-green",
    color: "green",
  },
};
