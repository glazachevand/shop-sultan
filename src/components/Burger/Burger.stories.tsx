import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';
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
type Story = StoryObj<typeof Burger>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const burgerButton = canvas.getByTestId('burgerButton');
    await sleep(1000);
    await userEvent.click(burgerButton);
    await sleep(2000);
    await userEvent.click(burgerButton);
  }
}