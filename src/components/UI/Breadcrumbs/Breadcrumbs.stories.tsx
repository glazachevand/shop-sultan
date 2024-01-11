import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Catalog: Story = {
  args: {
    item: "Косметика и гигиена",
  },
};

export const Fullproduct: Story = {
  args: {
    item: "Страница товара",
  },
};

export const Cart: Story = {
  args: {
    item: "Корзина",
  },
};

export const NotFound: Story = {
  args: {
    item: "Страница 404",
  },
};
