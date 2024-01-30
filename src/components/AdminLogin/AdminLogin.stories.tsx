import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { RootState } from "store/store";
import { StoreDecorator } from "utils/storybook/StoreDecorator";
import { AdminLogin } from "./AdminLogin";

const meta: Meta<typeof AdminLogin> = {
  title: "Components/AdminLogin",
  component: AdminLogin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof AdminLogin>;

const preloadedStateIsAdmin: Partial<RootState> = {
  user: {
    isAdmin: true
  },
}

const preloadedStateNotAdmin: Partial<RootState> = {
  user: {
    isAdmin: false
  },
}

export const Admin: Story = {
  decorators: [
    StoreDecorator(preloadedStateIsAdmin)
  ]
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NotAdmin: Story = {
  decorators: [
    StoreDecorator(preloadedStateNotAdmin)
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginBtn = canvas.getByTitle('Войти как администратор');
    await sleep(1000);
    await userEvent.click(loginBtn);
  }
}