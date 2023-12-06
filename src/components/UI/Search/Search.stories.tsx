import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./Search";

const meta: Meta<typeof Search> = {
  title: "UI/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InHeader: Story = {
  args: {
    type: 'header'
  }
}

export const InSidebar: Story = {
  args: {
    type: 'param'
  }
}