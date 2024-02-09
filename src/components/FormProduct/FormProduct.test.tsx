import { fireEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";
import { RootState } from "store/store";
import { IProduct } from "types/products";
import { componentRender } from "utils/tests/componentRender";
import { FormProduct } from "./FormProduct";

describe('FormProduct.test', () => {
  const preloadedState: Partial<RootState> = {
    products: {
      filteredProducts: [],
      manufactures: [],
      countProducts: 0,
      categories: [
        { id: 1, title: 'Уход за лицом' },
        { id: 1, title: 'Средства для загара' }
      ]
    }
  }

  test('Test new product', async () => {
    componentRender(<FormProduct />, { preloadedState });
    const elem = screen.getByTestId('formProduct');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('добавление товара');
    // ввести название
    let title = await screen.findByTitle('Название');
    expect(title).toHaveValue('');
    fireEvent.input(title, { target: { value: 'Крем для лица' } });
    title = await screen.findByTitle('Название');
    expect(title).toHaveDisplayValue('Крем для лица');
    // выбрать тип размера Объем
    const size = await screen.findByLabelText('Объем');
    fireEvent.click(size);
    const radio = await screen.findAllByRole('radio');
    expect(radio[1]).toBeChecked();
    // выбрать тип ухода
    let checkboxes = await screen.findAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
  });

  test('Test edit product', async () => {
    const product: IProduct = {
      id: 3,
      title: "Набор шампунь и бальзам для волос для объема и восстановления",
      url: "product3.webp",
      barcode: 4684049097549,
      manufacturer: "HELDI",
      brand: "HELDI",
      description: "Шампунь: вода, анионный ПАВ, амфотерный ПАВ жирных кислот кокосового масла, комплекс натуральных мягких неионных ПАВ на основе жирных кислот кокосового масла, хлорид натрия, глицерин, мочевина, сок Алоэ Вера, гидролизованный кератин, L-Аргинин, экстракт крапивы, экстракт конского каштана, экстракт цветков ромашки, D- Пантенол, молочная Кислота, фитат Натрия, дегидроуксусная кислота, бензиловый спирт, парфюмированная композиция. Бальзам- кондиционер: вода, цетеариловый спирт, цетримония хлорид, масло Ши, глицерин, хлорид бегентримония, цетеарет-20, гидролизованный кератин, диметикон, пантенол, экстракт алоэ вера, экстракт корня лопуха, экстракт хвоща полевого, гиалуроновая кислота, отдушка, молочная кислота, фитат натрия, дегидроуксусная кислота, бензиловый спирт.",
      typesize: "объем",
      size: "2000 мл",
      typecare: [
        "Уход за волосами",
        "Подарочные наборы"
      ],
      price: 817
    }

    componentRender(<FormProduct product={product} />, { preloadedState });
    const elem = screen.getByTestId('formProduct');
    screen.debug();
    expect(elem).toHaveTextContent('Шампунь: вода, анионный ПАВ');
    let title = await screen.findByTitle('Название');
    expect(title).toHaveValue('Набор шампунь и бальзам для волос для объема и восстановления');
    // ввести название
    fireEvent.input(title, { target: { value: 'Крем для лица' } });
    title = await screen.findByTitle('Название');
    expect(title).toHaveDisplayValue('Крем для лица');
  });
});