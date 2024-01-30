import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { CategoryGlobalMenu } from "./CategoryGlobalMenu";

const meta: Meta<typeof CategoryGlobalMenu> = {
  title: "UI/CategoryGlobalMenu",
  component: CategoryGlobalMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof CategoryGlobalMenu>;

export const Primary: Story = {
  args: {
    variant: 'footer'
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};