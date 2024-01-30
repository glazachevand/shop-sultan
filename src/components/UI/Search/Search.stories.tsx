import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { Search } from "./Search";

const meta: Meta<typeof Search> = {
  title: "UI/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    withRouter,
    StoreDecorator({})
  ]
};

export default meta;
type Story = StoryObj<typeof Search>;

export const InHeader: Story = {
  args: {
    variant: 'header',
  }
}

export const InSidebar: Story = {
  args: {
    variant: 'param'
  }
}