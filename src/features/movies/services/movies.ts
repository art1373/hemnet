import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
  Movie,
  MovieList,
  GetMovieByIdRequest,
  GetMovieByQueryRequest,
} from '../models'

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, GetMovieByIdRequest>({
      query: (arg) => `?i=${arg.id}&apikey=${import.meta.env.VITE_APP_API_KEY}`,
    }),
    getMovieBySearch: builder.query<MovieList, GetMovieByQueryRequest>({
      query: (arg) =>
        `?s=${arg.query}&page=${arg.page}&apikey=${
          import.meta.env.VITE_APP_API_KEY
        }`,
    }),
  }),
  reducerPath: 'movieApi',
})

export const { useGetMovieByIdQuery, useGetMovieBySearchQuery } = movieApi
