import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Movie, MovieList } from './types'

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, void>({
      query: () => `i=tt1261945&apikey=42017f47`,
    }),
    getMovieBySearch: builder.query<MovieList, void>({
      query: () => `s=sex&page=1&apikey=42017f47`,
    }),
  }),
  reducerPath: 'movieApi',
})

export const { useGetMovieByIdQuery, useGetMovieBySearchQuery } = movieApi
