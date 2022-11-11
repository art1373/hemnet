import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Movie } from '../models'

export interface MovieState {
  movies: Movie[]
  selectedMovieId: string
}

const initialState: MovieState = {
  movies: [],
  selectedMovieId: '',
}

export const movieSlice = createSlice({
  initialState,
  name: 'movie',
  reducers: {
    setMovieId: (state, action: PayloadAction<string>) => {
      state.selectedMovieId = action.payload
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload
    },
  },
})

export const { setMovies } = movieSlice.actions

export default movieSlice.reducer
