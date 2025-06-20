import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { URLS } from "../constants/constants";
import type { IResponseFilms } from "../types/types";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.baseUrl,
    prepareHeaders: headers => {
      headers.set("X-API-KEY", "74c082c1-5cd5-4ed9-b96d-6809910461cc");
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: builder => ({
    getFilms: builder.query<IResponseFilms, void>({
      query: () => `films?type=FILM`,
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;
