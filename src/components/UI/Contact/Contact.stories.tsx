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
    variant: 'location',
    color: 'dark',
    isIcon: true
  }
};

export const LocationFooter: Story = {
  args: {
    variant: 'location',
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
    variant: 'email',
    color: 'dark',
    isIcon: true
  }
};

export const EmailFooter: Story = {
  args: {
    variant: 'email',
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
    variant: 'sales',
    color: 'dark',
    isIcon: true
  }
};