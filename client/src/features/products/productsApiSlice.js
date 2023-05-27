import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => `/categories`,
      providesTags: result => ["Category"],
    }),
    getAllProducts: builder.query({
      query: ({ categoryId }) => `/categories/${categoryId}`,
      providesTags: result => ["ProductItems"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllProductsQuery } =
  productsApiSlice;
