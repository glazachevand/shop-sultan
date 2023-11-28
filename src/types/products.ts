export interface Product {
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
export interface ProductsState {
  products: Product[];
  categories: string[];
}

export enum ProductsActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  ADD_CATEGORY = "ADD_CATEGORY",
  DELETE_CATEGORY = "DELETE_CATEGORY",
  UPDATE_CATEGORIES = "UPDATE_CATEGORIES",
}
interface AddProductAction {
  type: ProductsActionTypes.ADD_PRODUCT;
  payload: Product;
}
interface DeleteProductAction {
  type: ProductsActionTypes.DELETE_PRODUCT;
  payload: Product;
}
interface UpdateProductAction {
  type: ProductsActionTypes.UPDATE_PRODUCT;
  payload: Product;
}
interface AddCategoryAction {
  type: ProductsActionTypes.ADD_CATEGORY;
  payload: string;
}
interface DeletCategorytAction {
  type: ProductsActionTypes.DELETE_CATEGORY;
  payload: string;
}
interface UpdateCategoriesAction {
  type: ProductsActionTypes.UPDATE_CATEGORIES;
  payload: string[];
}

export type ProductsAction =
  | AddProductAction
  | DeleteProductAction
  | UpdateProductAction
  | AddCategoryAction
  | DeletCategorytAction
  | UpdateCategoriesAction;
