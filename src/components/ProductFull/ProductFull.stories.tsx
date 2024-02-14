import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "store/store";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { ProductFull } from "./ProductFull";

const preloadedState: Partial<RootState> = {
  cart: {
    items: [
      {
        id: 17,
        title: "Шампунь для волос Ромашка",
        url: "product17.webp",
        barcode: 4622249097549,
        manufacturer: "ООО 'БИГ'",
        brand: "Каждый день",
        description: "Шампунь для мытья волос 'Ромашка'. без силикона и парабенов прекрасно промывает волосы и восстанавливает кожу головы",
        typesize: "объем",
        size: "500 мл",
        typecare: ["Уход за волосами"],
        price: 37,
        popular: true,
        count: 4
      },
      {
        id: 16,
        title: "Бальзам для волос оттеночный Шоколад",
        url: "product16.webp",
        barcode: 4684041117549,
        manufacturer: "ООО 'БИГ'",
        brand: "Каждый день",
        description: "Оттеночный бальзам от «Каждый день» - мягкое окрашивающее средство с шоколадным оттенкам. Из качественного сырья.",
        typesize: "объем",
        size: "150 мл",
        typecare: ["Уход за волосами"],
        price: 76,
        count: 3,
      },
      {
        id: 7,
        title: "Зубная щетка, щетки зубные мягкие в наборе 2 штуки",
        url: "product7.webp",
        barcode: 4684049095549,
        manufacturer: "iDento",
        brand: "iDento",
        description: "Зубная щетка iDento обеспечивает выское качество очистки зубов за счет большого количества мягких щетинок. Зубная щетка мягкая iDento имеет более 2 000 щетинок, позволяет полностью очистить труднодоступные участки полости рта и обеспечиввает бережный уход за деснами. Удобная ручка зубной щетки не скользит в руках. Мягкие, эластичные, идеально закругленные щетинки, деликатно полируют зубную эмаль и не травмируют десны. Мягкая зубная щетка iDento мягкая подходит для ухода за полостью рта при гиперчувствительности эмали и воспалении десен.",
        typesize: "вес",
        size: "50 г",
        typecare: ["Гигиеническая продукция", "Гигиена полости рта"],
        price: 174,
        count: 2,
      }
    ],
    totalPrice: 724,
    totalCounts: 9,
  },
}

const meta: Meta<typeof ProductFull> = {
  title: "Components/ProductFull",
  component: ProductFull,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [StoreDecorator(preloadedState)]
};

export default meta;
type Story = StoryObj<typeof ProductFull>;

export const Product: Story = {
  args: {
    product: {
      id: 7,
      title: "Зубная щетка, щетки зубные мягкие в наборе 2 штуки",
      url: "product7.webp",
      barcode: 4684049095549,
      manufacturer: "iDento",
      brand: "iDento",
      description: "Зубная щетка iDento обеспечивает выское качество очистки зубов за счет большого количества мягких щетинок. Зубная щетка мягкая iDento имеет более 2 000 щетинок, позволяет полностью очистить труднодоступные участки полости рта и обеспечиввает бережный уход за деснами. Удобная ручка зубной щетки не скользит в руках. Мягкие, эластичные, идеально закругленные щетинки, деликатно полируют зубную эмаль и не травмируют десны. Мягкая зубная щетка iDento мягкая подходит для ухода за полостью рта при гиперчувствительности эмали и воспалении десен.",
      typesize: "вес",
      size: "50 г",
      typecare: ["Гигиеническая продукция", "Гигиена полости рта"],
      price: 174,
    }
  }
}
