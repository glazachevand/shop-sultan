export interface IFilterState {
  categories: string[];
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  limit?: number;
  page?: number;
  sort?: string;
}

export type ParametersType = {
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
};
