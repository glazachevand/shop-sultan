import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { CartBtn } from "./CartBtn";

const meta: Meta<typeof CartBtn> = {
  title: "UI/CartBtn",
  component: CartBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {
  args: {
    isText: true
  }
};

export const WithoutText: Story = {
  args: {
    isText: false
  }
};