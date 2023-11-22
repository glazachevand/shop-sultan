import type { Meta, StoryObj } from "@storybook/react";

import { BankCards } from "./BankCards";

const meta: Meta<typeof BankCards> = {
  title: "UI/BankCards",
  component: BankCards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};