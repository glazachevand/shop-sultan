import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { CategoryMenu } from "./CategoryMenu";

const meta: Meta<typeof CategoryMenu> = {
  title: "UI/CategoryMenu",
  component: CategoryMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'footer'
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};