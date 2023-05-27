import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation({
      query: userData => ({
        url: "/createOrder",
        method: "POST",
        body: { ...userData },
      }),
      invalidatesTags: ["ProductItems"],
    }),
  }),
});

export const { useCreateOrderMutation } = productsApiSlice;
