import { createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "types/products";

export type QueryParams = {
  categories?: string[];
  priceMin?: number;
  priceMax?: number;
  manufacturers?: string[];
  limit?: number;
  page?: number;
  sort?: string;
};

export const productsApi = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], QueryParams>({
      query: ({ priceMin = 10, priceMax = 10000, categories, manufacturers }) => {
        const newSearchParams = new URLSearchParams();

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

        return {
          url:
            "/products" +
            "?" +
            `price_lte=${priceMax}&price_gte=${priceMin}&` +
            newSearchParams.toString(),
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
