import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "store/store";
import { withRouter } from "storybook-addon-react-router-v6";
import { StoreDecorator } from "utils/storybook/StoreDecorator";

import { ProductShort } from "./ProductShort";

const preloadedStateNoAdmin: Partial<RootState> = {
  user: {
    isAdmin: false
  },
}

const preloadedStateIsAdmin: Partial<RootState> = {
  user: {
    isAdmin: true
  },
}

const meta: Meta<typeof ProductShort> = {
  title: "Components/ProductsContainer/ProductShort",
  component: ProductShort,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductShort>;

export const NoAdmin: Story = {
  decorators: [withRouter, StoreDecorator(preloadedStateNoAdmin)],
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

export const IsAdmin: Story = {
  decorators: [withRouter, StoreDecorator(preloadedStateIsAdmin)],
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