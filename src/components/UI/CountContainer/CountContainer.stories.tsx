import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { CountContainer } from "./CountContainer";

const meta: Meta<typeof CountContainer> = {
  title: "UI/CountContainer",
  component: CountContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountContainer>;

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState<number>(5);

    const plusHandler = () => {
      setValue(state => state + 1);
    }

    const minusHandler = () => {
      setValue(state => state - 1);
    }

    return <CountContainer value={value} plusHandler={plusHandler} minusHandler={minusHandler} />
  }
};
