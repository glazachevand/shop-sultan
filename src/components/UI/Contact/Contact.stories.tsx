import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Contact } from "./Contact";

const meta: Meta<typeof Contact> = {
  title: "UI/Contact",
  component: Contact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const LocationHeader: Story = {
  args: {
    type: 'location',
    color: 'dark',
    isIcon: true
  }
};

export const LocationFooter: Story = {
  args: {
    type: 'email',
    color: 'white',
    isIcon: false
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};

export const EmailHeader: Story = {
  args: {
    type: 'email',
    color: 'dark',
    isIcon: true
  }
};

export const EmailFooter: Story = {
  args: {
    type: 'location',
    color: 'white',
    isIcon: false
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};

export const SalesBurger: Story = {
  args: {
    type: 'sales',
    color: 'dark',
    isIcon: true
  }
};