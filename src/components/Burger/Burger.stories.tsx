import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Burger } from "./Burger";

const meta: Meta<typeof Burger> = {
  title: "Components/Burger",
  component: Burger,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}