import type { Meta, StoryObj } from "@storybook/react";

import { Subscription } from "./Subscription";

const meta: Meta<typeof Subscription> = {
  title: "UI/Subscription",
  component: Subscription,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InFooter: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};