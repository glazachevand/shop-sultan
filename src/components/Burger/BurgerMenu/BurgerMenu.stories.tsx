import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { BurgerMenu } from "./BurgerMenu";

const meta: Meta<typeof BurgerMenu> = {
  title: "Components/BurgerMenu",
  component: BurgerMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof BurgerMenu>;

export const Primary: Story = {}