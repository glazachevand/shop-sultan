import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenu } from "components/Burger/BurgerMenu/BurgerMenu";
import { withRouter } from 'storybook-addon-react-router-v6';
import { Button } from "components/UI/Button/Button";
import { Modal } from "./Modal";
import cls from "pages/CartPage/CartPage.module.scss";
import { FormProduct } from "components/FormProduct/FormProduct";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

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
type Story = StoryObj<typeof Modal>;

export const Burger: Story = {
  args: {
    isOpen: true,
    children: <BurgerMenu />
  }
};

export const Order: Story = {
  args: {
    isOpen: true,
    isCloseBtn: true,
    type: 'order',
    children: <div className={cls.orderModal}>
      <Button icon="orderOK" form="circ" width="59px" height="59px" />
      <h2 className={`${cls.title} title1`}>Спасибо за заказ</h2>
      <p >Наш менеджер свяжется с вами в ближайшее время</p>
    </div>
  }
};

export const Catalog: Story = {
  args: {
    isOpen: true,
    isCloseBtn: true,
    type: 'order',
    children: <div className="formModal">
      <FormProduct />
    </div>
  },
  decorators: [StoreDecorator({})]
};