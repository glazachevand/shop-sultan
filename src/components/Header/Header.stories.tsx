import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [withRouter, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderRussian: Story = {
  parameters: {
    locale: 'ru',
  }
}

export const HeaderEnglish: Story = {
  parameters: {
    locale: 'en',
  }
}
