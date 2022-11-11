import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Movie, MovieList } from './types'

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, { id: string }>({
      query: (arg) => `?i=${arg.id}&apikey=42017f47`,
    }),
    getMovieBySearch: builder.query<MovieList, { query: string; page: string }>(
      {
        query: (arg) => `?s=${arg.query}&page=${arg.page}&apikey=42017f47`,
      }
    ),
  }),
  reducerPath: 'movieApi',
})

export const { useGetMovieByIdQuery, useGetMovieBySearchQuery } = movieApi
