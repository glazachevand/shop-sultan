import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenu } from "components/Burger/BurgerMenu/BurgerMenu";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Burger: Story = {
  args: {
    isOpen: true,
    children: <BurgerMenu />
  }
};