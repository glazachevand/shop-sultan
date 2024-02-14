import { ICategory, IProduct, IProductsState } from "types/products";

import { productsReducer, setCategories, setFilteredProducts } from "./productsSlice";

describe("productsSlice.test", () => {
  let initialState: IProductsState;

  beforeAll(() => {
    const filteredProducts = [
      {
        id: 1,
        title: "BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
        url: "product1.webp",
        barcode: 4604049097548,
        manufacturer: "BioMio",
        brand: "BioMio",
        description: "",
        typesize: "вес",
        size: "1020 г",
        typecare: [""],
        price: 100,
      },
      {
        id: 2,
        title: "Шампунь beauty-full volume плотность и объем",
        url: "product2.webp",
        barcode: 4704049097548,
        manufacturer: "Tresemme",
        brand: "Tresemme",
        description: "",
        typesize: "объем",
        size: "650 мл",
        typecare: [""],
        price: 200,
      },
    ];

    initialState = {
      filteredProducts,
      categories: [],
      manufactures: [],
      countProducts: 0,
      minPrice: 10,
      maxPrice: 10000,
    };
  });

  test("setFilteredProducts test", () => {
    const payload: IProduct[] = [
      {
        id: 2,
        title: "Шампунь beauty-full volume плотность и объем",
        url: "product2.webp",
        barcode: 4704049097548,
        manufacturer: "Tresemme",
        brand: "Tresemme",
        description: "",
        typesize: "объем",
        size: "650 мл",
        typecare: [""],
        price: 200,
      },
    ];

    const finishState = {
      filteredProducts: [
        {
          id: 2,
          title: "Шампунь beauty-full volume плотность и объем",
          url: "product2.webp",
          barcode: 4704049097548,
          manufacturer: "Tresemme",
          brand: "Tresemme",
          description: "",
          typesize: "объем",
          size: "650 мл",
          typecare: [""],
          price: 200,
        },
      ],
      categories: [],
      manufactures: [["Tresemme", 1]],
      countProducts: 1,
      maxPrice: 200,
      minPrice: 200,
    };

    expect(productsReducer(initialState, setFilteredProducts(payload))).toEqual(finishState);
  });

  test("setCategories test", () => {
    const payload: ICategory[] = [
      {
        id: 1,
        title: "Уход за лицом",
      },
      {
        id: 1,
        title: "Уход за телом",
      },
    ];

    const finishState = {
      filteredProducts: [
        {
          id: 1,
          title: "BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
          url: "product1.webp",
          barcode: 4604049097548,
          manufacturer: "BioMio",
          brand: "BioMio",
          description: "",
          typesize: "вес",
          size: "1020 г",
          typecare: [""],
          price: 100,
        },
        {
          id: 2,
          title: "Шампунь beauty-full volume плотность и объем",
          url: "product2.webp",
          barcode: 4704049097548,
          manufacturer: "Tresemme",
          brand: "Tresemme",
          description: "",
          typesize: "объем",
          size: "650 мл",
          typecare: [""],
          price: 200,
        },
      ],
      categories: [
        {
          id: 1,
          title: "Уход за лицом",
        },
        {
          id: 1,
          title: "Уход за телом",
        },
      ],
      manufactures: [],
      countProducts: 0,
      minPrice: 10,
      maxPrice: 10000,
    };

    expect(productsReducer(initialState, setCategories(payload))).toEqual(finishState);
  });
});
