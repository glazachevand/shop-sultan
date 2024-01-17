import { IFilterState, ParametersType, SortType } from "types/filters";
import {
  clearParameters,
  filterReducer,
  setFilteredCategories,
  setLimit,
  setPage,
  setParameters,
  setSort,
} from "./filterSlice";

describe("filterSlice.test", () => {
  let initialState: IFilterState;
  beforeAll(() => {
    initialState = {
      typecare: ["Уход за волосами"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    };
  });

  test("setFilteredCategories test", () => {
    const finishState1 = {
      typecare: [],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    };

    const finishState2 = {
      typecare: ["Уход за волосами", "Уход за телом"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    };

    expect(filterReducer(initialState, setFilteredCategories("Уход за волосами"))).toEqual(
      finishState1,
    );
    expect(filterReducer(initialState, setFilteredCategories("Уход за телом"))).toEqual(
      finishState2,
    );
  });

  test("setParameters test", () => {
    const finishState = {
      typecare: ["Уход за волосами"],
      priceMin: 200,
      priceMax: 2000,
      manufacturers: ["Synergetic", "BioMio"],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    };

    const payload: ParametersType = {
      priceMin: 200,
      priceMax: 2000,
      manufacturers: ["Synergetic", "BioMio"],
    };

    expect(filterReducer(initialState, setParameters(payload))).toEqual(finishState);
  });

  test("setSort test", () => {
    const finishState = {
      typecare: ["Уход за волосами"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 2,
      sort: ["price", "desc"],
    };
    const payload: SortType = ["price", "desc"];

    expect(filterReducer(initialState, setSort(payload))).toEqual(finishState);
  });

  test("setPage test", () => {
    const finishState = {
      typecare: ["Уход за волосами"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 6,
      page: 5,
      sort: ["brand", "asc"],
    };

    expect(filterReducer(initialState, setPage(5))).toEqual(finishState);
  });

  test("setLimit test", () => {
    const finishState = {
      typecare: ["Уход за волосами"],
      priceMin: 100,
      priceMax: 1000,
      manufacturers: [""],
      limit: 12,
      page: 2,
      sort: ["brand", "asc"],
    };

    expect(filterReducer(initialState, setLimit(12))).toEqual(finishState);
  });

  test("clearParameters test", () => {
    const finishState = {
      typecare: ["Уход за волосами"],
      priceMin: 10,
      priceMax: 10000,
      manufacturers: [],
      limit: 6,
      page: 2,
      sort: ["brand", "asc"],
    };

    expect(filterReducer(initialState, clearParameters())).toEqual(finishState);
  });
});
