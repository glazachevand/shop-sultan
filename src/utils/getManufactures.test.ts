import { IProduct } from "types/products";
import { getManufactures } from "./getManufactures ";

describe("getManufactures.test", () => {
  test("should return array of empty manufacturer", () => {
    const products = [
      {
        manufacturer: "",
      },
      {
        manufacturer: "",
      },
    ];
    expect(getManufactures(products as IProduct[])).toEqual([["", 2]]);
  });
});

describe("getManufactures.test", () => {
  test("should return sort array", () => {
    const products = [
      {
        manufacturer: "ООО 'БИГ'",
      },
      {
        manufacturer: "ООО 'БИГ'",
      },
      {
        manufacturer: "BioMio",
      },
      {
        manufacturer: "BioMio",
      },
      {
        manufacturer: "BioMio",
      },
      {
        manufacturer: "iDento",
      },
    ];
    expect(getManufactures(products as IProduct[])).toEqual([
      ["BioMio", 3],
      ["ООО 'БИГ'", 2],
      ["iDento", 1],
    ]);
  });
});
