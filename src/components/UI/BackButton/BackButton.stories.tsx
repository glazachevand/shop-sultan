import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';

import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
  title: "UI/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {}
