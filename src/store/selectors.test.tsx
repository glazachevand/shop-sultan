import { RootState } from "store/store";

describe("selectors.test", () => {
  const state: Partial<RootState> = {
    products: {
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
        }
      ],
      categories: [],
      manufactures: [],
      countProducts: 0,
      minPrice: 10,
      maxPrice: 10000
    },
    filters: {
      typecare: ["Уход за волосами"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    },
    cart: {
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
      totalPrice: 0,
      totalCounts: 0,
    },
    user: { isAdmin: true },
  };
  const getFilteredProductsState = (state: Partial<RootState>) => state?.products?.filteredProducts || [];
  const getSortsState = (state: Partial<RootState>) => state?.filters?.sort || [];
  const getCartState = (state: Partial<RootState>) => state?.cart || {};
  const getUserState = (state: Partial<RootState>) => state.user;

  test("filteredProducts selector test", () => {
    expect(getFilteredProductsState(state)).toEqual([{
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
    }]);
  });

  test("sort selector test", () => {
    expect(getSortsState(state)).toEqual(["brand", "asc"]);
  });

  test("cart selector test", () => {
    expect(getCartState(state)).toEqual({
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
      totalPrice: 0,
      totalCounts: 0,
    });
  });

  test("user selector test", () => {
    expect(getUserState(state)).toEqual({ isAdmin: true });
  });
});
