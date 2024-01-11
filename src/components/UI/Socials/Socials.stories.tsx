import type { Meta, StoryObj } from "@storybook/react";

import { Socials } from "./Socials";

const meta: Meta<typeof Socials> = {
  title: "UI/Socials",
  component: Socials,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const InFooter: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  }
};