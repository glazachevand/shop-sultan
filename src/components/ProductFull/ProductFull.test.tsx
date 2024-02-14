import { fireEvent, screen } from "@testing-library/react";
import { RootState } from "store/store";
import { IProduct } from "types/products";
import { componentRender } from "utils/tests/componentRender";

import { ProductFull } from "./ProductFull";

describe('ProductFull.test', () => {
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
  let product: IProduct;

  beforeEach(() => {
    product = {
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
  });

  test('Test render ProductFull', async () => {
    componentRender(<ProductFull product={product} />, { preloadedState });
    const productFull = await screen.findByTestId('productFull');
    expect(productFull).toBeInTheDocument();
    expect(productFull).toHaveTextContent('Зубная щетка');
    expect(productFull).toHaveTextContent('174 ₽');
    expect(productFull).toHaveTextContent('Описание');
    expect(productFull).toHaveTextContent('Характеристики');
    expect(productFull).toHaveTextContent('Тип ухода');
    expect(productFull).toContainHTML('product7.webp');
    expect(screen.getAllByAltText('product')[0]).toBeInTheDocument();
    expect(screen.getAllByAltText('cart')[0]).toBeInTheDocument();
    expect(screen.getAllByAltText('subscription')[0]).toBeInTheDocument();
    expect(screen.getAllByAltText('price list')[0]).toBeInTheDocument();
    const countContainer = await screen.findByTestId('countContainer');
    expect(countContainer).toBeInTheDocument();
    expect(countContainer).toHaveTextContent('2');
  });

  test('Test click on titles', async () => {
    componentRender(<ProductFull product={product} />, { preloadedState });
    const descriptionTitle = await screen.findByTestId('description');
    fireEvent.click(descriptionTitle);
    let productFull = await screen.findByTestId('productFull');
    expect(productFull).toHaveTextContent('Зубная щетка iDento обеспечивает выское качество очистки зубов');
    const description = await screen.findByTestId('description');
    expect(description).toHaveClass('show');

    const propertiesTitle = await screen.findByTestId('properties');
    fireEvent.click(propertiesTitle);
    productFull = await screen.findByTestId('productFull');
    expect(productFull).toHaveTextContent('4684049095549');
    const properties = await screen.findByTestId('properties');
    expect(properties).toHaveClass('show');
  });
});