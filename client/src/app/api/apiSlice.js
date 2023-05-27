import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://delivery-api-kappa.vercel.app/api" }),
  tagTypes: ["Category", "ProductItems"],
  endpoints: builder => ({}),
});
