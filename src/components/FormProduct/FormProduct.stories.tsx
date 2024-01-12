import type { Meta, StoryObj } from "@storybook/react";
import { IProduct } from "types/products";
import { StoreDecorator } from "utils/storybook/StoreDecorator";
import { FormProduct } from "./FormProduct";

const meta: Meta<typeof FormProduct> = {
  title: "Components/FormProduct",
  component: FormProduct,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof FormProduct>;

export const Edit: Story = {
  render: () => {
    const product: IProduct = {
      "id": 3,
      "title": "Набор шампунь и бальзам для волос для объема и восстановления",
      "url": "product3.webp",
      "barcode": 4684049097549,
      "manufacturer": "HELDI",
      "brand": "HELDI",
      "description": "Шампунь: вода, анионный ПАВ, амфотерный ПАВ жирных кислот кокосового масла, комплекс натуральных мягких неионных ПАВ на основе жирных кислот кокосового масла, хлорид натрия, глицерин, мочевина, сок Алоэ Вера, гидролизованный кератин, L-Аргинин, экстракт крапивы, экстракт конского каштана, экстракт цветков ромашки, D- Пантенол, молочная Кислота, фитат Натрия, дегидроуксусная кислота, бензиловый спирт, парфюмированная композиция. Бальзам- кондиционер: вода, цетеариловый спирт, цетримония хлорид, масло Ши, глицерин, хлорид бегентримония, цетеарет-20, гидролизованный кератин, диметикон, пантенол, экстракт алоэ вера, экстракт корня лопуха, экстракт хвоща полевого, гиалуроновая кислота, отдушка, молочная кислота, фитат натрия, дегидроуксусная кислота, бензиловый спирт.",
      "typesize": "объем",
      "size": "2000 мл",
      "typecare": [
        "Уход за волосами",
        "Подарочные наборы"
      ],
      "price": 817
    }
    return <FormProduct product={product} />
  }
}

export const New: Story = {
  render: () => {
    return <FormProduct />
  }
}