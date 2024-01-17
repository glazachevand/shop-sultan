import { ICartState } from "types/cart";
import {
  addProductToCart,
  calculateCountAndPrice,
  cartReducer,
  clearCart,
  minusProductInCart,
  removeProductInCart,
} from "./cartSlice";

describe("cartSlice.test", () => {
  let initialState: ICartState;

  beforeAll(() => {
    const items = [
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
        count: 4,
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
        count: 3,
      },
    ];
    initialState = {
      items,
      totalPrice: 0,
      totalCounts: 0,
    };
  });

  test("clearCart test", () => {
    const finishState = {
      items: [],
      totalPrice: 0,
      totalCounts: 0,
    };
    expect(cartReducer(initialState, clearCart())).toEqual(finishState);
  });

  test("calculateCountAndPrice test", () => {
    const finishState = {
      items: [
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
          count: 4,
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
          count: 3,
        },
      ],
      totalPrice: 1000,
      totalCounts: 7,
    };
    expect(cartReducer(initialState, calculateCountAndPrice())).toEqual(finishState);
  });

  test("addProductToCart test", () => {
    const payload1 = {
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
      count: 3,
    };
    const payload2 = {
      id: 12,
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
      count: 0,
    };
    const finishState1 = {
      items: [
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
          count: 4,
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
          count: 4,
        },
      ],
      totalPrice: 1200,
      totalCounts: 8,
    };
    const finishState2 = {
      items: [
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
          count: 4,
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
          count: 3,
        },
        {
          id: 12,
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
          count: 1,
        },
      ],
      totalPrice: 1200,
      totalCounts: 8,
    };

    expect(cartReducer(initialState, addProductToCart(payload1))).toEqual(finishState1);
    expect(cartReducer(initialState, addProductToCart(payload2))).toEqual(finishState2);
  });

  test("minusProductInCart test", () => {
    const payload = {
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
      count: 3,
    };

    const finishState = {
      items: [
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
          count: 4,
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
          count: 2,
        },
      ],
      totalPrice: 800,
      totalCounts: 6,
    };

    expect(cartReducer(initialState, minusProductInCart(payload))).toEqual(finishState);
  });

  test("removeProductInCart test", () => {
    const payload = {
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
      count: 3,
    };

    const finishState = {
      items: [
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
          count: 4,
        },
      ],
      totalPrice: 400,
      totalCounts: 4,
    };

    expect(cartReducer(initialState, removeProductInCart(payload))).toEqual(finishState);
  });
});
