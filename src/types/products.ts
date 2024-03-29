export interface ICategory {
  id: number;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  url: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  description: string;
  typesize: string;
  size: string;
  typecare: string[];
  price: number;
  popular?: boolean;
}
export interface IProductsState {
  filteredProducts: IProduct[];
  categories: ICategory[];
  manufactures: [string, number][];
  countProducts: number;
  minPrice: number;
  maxPrice: number;
}
