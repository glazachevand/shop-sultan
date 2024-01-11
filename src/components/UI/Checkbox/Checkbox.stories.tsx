import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    item: 'Булгари Грин',
    count: 5,
    checked: true,
  }
};

export const NotChecked: Story = {
  args: {
    item: 'Булгари Грин',
    count: 5,
    checked: false,
  }
};