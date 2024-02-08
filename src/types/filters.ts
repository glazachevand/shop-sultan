export interface IFilterState {
  typecare: string[];
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  limit?: number;
  page?: number;
  sort: SortType;
}

export type ParametersType = {
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
};

export type SortType = ["brand", "desc"] | ["brand", "asc"] | ["price", "desc"] | ["price", "asc"];

export type SortListType = {
  title: string;
  value: string;
  sortProperties: SortType;
  enTitle: string;
};
