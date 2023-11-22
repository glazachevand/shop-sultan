import type { Meta, StoryObj } from "@storybook/react";

import { BackCall } from "./BackCall";

const meta: Meta<typeof BackCall> = {
  title: "UI/BackCall",
  component: BackCall,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InHeader: Story = {
  args: {
    color: "dark",
    isIcon: false,
    isText: true,
    aligh: "right",
  },
};

export const InBurgerMenu: Story = {
  args: {
    color: "dark",
    isIcon: true,
    isText: false,
  },
};

export const InFooter: Story = {
  args: {
    color: "white",
    isIcon: false,
    isText: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};
