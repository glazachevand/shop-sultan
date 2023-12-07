import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SortType } from "types/filters";
import { IProduct } from "types/products";

export type QueryParams = {
  categories?: string[];
  priceMin?: number;
  priceMax?: number;
  manufacturers?: string[];
  limit?: number;
  page?: number;
  sort?: SortType;
  search?: string;
};

export const productsApi = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], QueryParams>({
      query: ({ priceMin, priceMax, categories, manufacturers, sort, search, page, limit = 9 }) => {
        const newSearchParams = new URLSearchParams();
        let str = "";

        if (categories) {
          for (const item of categories) {
            newSearchParams.append("typecare_like", item);
          }
        }

        if (manufacturers) {
          for (const item of manufacturers) {
            newSearchParams.append("manufacturer_like", item);
          }
        }

        if (sort) {
          newSearchParams.append("_sort", sort[0]);
          newSearchParams.append("_order", sort[1]);
        }

        if (search) {
          newSearchParams.append("q", search);
        }

        if (page && limit) {
          newSearchParams.append("_limit", String(limit));
          newSearchParams.append("_page", String(page));
        }

        if (priceMax && priceMin) {
          str += `price_lte=${priceMax}&price_gte=${priceMin}&`;
        }

        return {
          url: "/products" + "?" + str + newSearchParams.toString(),
        };
      },
    }),
    getOneProduct: builder.query<IProduct, number>({
      query: (id: number) => ({ url: `/products/${id}` }),
    }),
    getCategories: builder.query<string[], void>({
      query: () => ({
        url: `/categories`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetOneProductQuery, useGetCategoriesQuery } = productsApi;
