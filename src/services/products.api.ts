import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SortType } from "types/filters";
import { ICategory, IProduct } from "types/products";

export type QueryParams = {
  typecare?: string[];
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
  tagTypes: ["Product", "Categories"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], QueryParams>({
      query: ({ priceMin, priceMax, typecare, manufacturers, sort, search, page, limit = 9 }) => {
        const newSearchParams = new URLSearchParams();
        let str = "";

        if (typecare) {
          for (const item of typecare) {
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
      providesTags: () => ["Product"],
    }),
    getOneProduct: builder.query<IProduct, number>({
      query: (id: number) => ({ url: `/products/${id}` }),
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => ({
        url: `/categories`,
      }),
      providesTags: () => ["Categories"],
    }),
    createProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    createCategory: builder.mutation<ICategory, ICategory>({
      query: (category) => ({
        url: `/categories`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation<ICategory, ICategory>({
      query: (category) => ({
        url: `/categories/${category.id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation<ICategory, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetOneProductQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productsApi;
