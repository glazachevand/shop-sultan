import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
  title: "UI/LangSwitcher",
  component: LangSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const English: Story = {
  parameters: {
    locale: 'en',
  }
};

export const Russian: Story = {
  parameters: {
    locale: 'ru',
  }
};