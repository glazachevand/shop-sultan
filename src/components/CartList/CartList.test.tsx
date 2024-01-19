import { RootState, } from "store/store";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "utils/tests/componentRender";
import { CartList } from "./CartList";

describe('CartList.test', () => {

  test('Test render cart list', () => {
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
            count: 1,
          }
        ],
        totalPrice: 550,
        totalCounts: 8,
      },
    }
    componentRender(<CartList />, { preloadedState });
    const elem = screen.getByTestId('cartList');
    expect(elem).toBeInTheDocument();
    expect(elem).toContainHTML('src="product17.webp"');
    expect(elem).toContainHTML('src="remove.svg"');
  });

  test('Test empty cart', () => {
    const preloadedState: Partial<RootState> = {
      cart: {
        items: [],
        totalPrice: 0,
        totalCounts: 0,
      },
    }
    componentRender(<CartList />, { preloadedState });
    const elem = screen.getByTestId('cartList');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('в корзине ничего нет');
    expect(elem).not.toContainHTML('src="remove.svg"');
  });

  test('Test add and minus item', async () => {
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
            price: 100,
            popular: true,
            count: 3
          },
        ],
        totalPrice: 300,
        totalCounts: 3,
      },
    }
    componentRender(<CartList />, { preloadedState });
    let countContainer = await screen.findByTestId('countContainer');
    expect(countContainer).toHaveTextContent('3');
    const cartItem = await screen.findByTestId('cartItem');
    expect(cartItem).toHaveTextContent('300 ₽');
    const plus = screen.getByTestId('plus');
    const minus = screen.getByTestId('minus');

    fireEvent.click(plus);
    countContainer = await screen.findByTestId('countContainer');
    expect(countContainer).toHaveTextContent('4');

    fireEvent.click(minus);
    fireEvent.click(minus);
    fireEvent.click(minus);
    countContainer = await screen.findByTestId('countContainer');
    expect(countContainer).toHaveTextContent('1');
    expect(cartItem).toHaveTextContent('100 ₽');
    const disableMinus = await screen.findByTestId('minus');
    expect(disableMinus).toBeDisabled();
  });

  test('Test remove item', async () => {
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
            price: 100,
            popular: true,
            count: 2
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
            price: 50,
            count: 2,
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
            price: 200,
            count: 1,
          }
        ],
        totalPrice: 500,
        totalCounts: 5,
      },
    }
    componentRender(<CartList />, { preloadedState });
    let elem = await screen.findByTestId('cartList');
    screen.debug();
    expect(elem).toBeInTheDocument();
    let removeBtns = await screen.findAllByAltText('remove');
    expect(removeBtns.length).toBe(3);
    expect(elem).toHaveTextContent('Шампунь для волос Ромашка');

    fireEvent.click(removeBtns[0]);
    elem = await screen.findByTestId('cartList');
    removeBtns = await screen.findAllByAltText('remove');
    expect(removeBtns.length).toBe(2);
    expect(elem).not.toHaveTextContent('Шампунь для волос Ромашка');
  });
});