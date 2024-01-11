import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Header: Story = {
  args: {
    type: 'header'
  }
};

export const Footer: Story = {
  args: {
    type: 'footer'
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
}