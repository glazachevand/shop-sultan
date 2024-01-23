import { screen } from "@testing-library/react";
import { RootState } from "store/store";
import { IProduct } from "types/products";
import { componentRender } from "utils/tests/componentRender";
import { ProductShort } from "./ProductShort";

describe('ProductShort.test', () => {
  const product: IProduct = {
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
  };

  test('test render ProductShort with isAdmin=false', async () => {
    const preloadedState: Partial<RootState> = {
      user: {
        isAdmin: false
      },
    };

    componentRender(<ProductShort product={product} />, { preloadedState });
    const productShort = await screen.findByTestId('productShort');
    expect(productShort).toBeInTheDocument();
    expect(productShort).toHaveTextContent('Зубная щетка');
    expect(productShort).toHaveTextContent('Гигиеническая продукция');
    expect(productShort).toHaveTextContent('iDento');
    expect(productShort).toHaveTextContent('174 ₽');
    expect(productShort).toContainHTML('product7.webp');
    expect(productShort).toContainHTML('box.svg');

    const cartBtn = await screen.findByTestId('cartBtn');
    expect(cartBtn).toContainHTML('cart-white.svg');
    expect(cartBtn).toHaveTextContent('В КОРЗИНУ');
    expect(screen.queryByTestId("editBtn")).toBeNull;
    expect(screen.queryByTestId("removeBtn")).toBeNull;
  });

  test('test render ProductShort with isAdmin=true', async () => {
    const preloadedState: Partial<RootState> = {
      user: {
        isAdmin: true
      },
    };

    componentRender(<ProductShort product={product} />, { preloadedState });
    const editBtn = await screen.findByTestId('editBtn');
    expect(editBtn).toHaveTextContent('Редактировать');
    const removeBtn = await screen.findByTestId('removeBtn');
    expect(removeBtn).toContainHTML('remove.svg');
    expect(screen.queryByTestId("cartBtn")).toBeNull;
  });
});