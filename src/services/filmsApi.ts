import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { URLS } from "../constants/constants";
import type { IFilm, IResponseFilms } from "../types/types";

const API_KEY = import.meta.env.VITE_KINOPOISKAPI_KEY;

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.baseUrl,
    prepareHeaders: headers => {
      headers.set("X-API-KEY", API_KEY);
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: builder => ({
    getFilms: builder.query<IResponseFilms, void>({
      query: () => `/films?type=FILM`,
    }),
    getFilmById: builder.query<IFilm, string>({
      query: id => `/films/${id}`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = filmsApi;
