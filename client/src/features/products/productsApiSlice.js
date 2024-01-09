import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => `/categories`,
      providesTags: () => ["Category"],
    }),
    getAllProducts: builder.query({
      query: ({ categoryId }) => `/categories/${categoryId}`,
      providesTags: () => ["ProductItems"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllProductsQuery } =
  productsApiSlice;
