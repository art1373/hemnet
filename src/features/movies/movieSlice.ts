import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Movie } from '../../services/types'

export interface MovieState {
  movies: Movie[]
}

const initialState: MovieState = {
  movies: [],
}

export const movieSlice = createSlice({
  initialState,
  name: 'movie',
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload
    },
  },
})

export const { setMovies } = movieSlice.actions

export default movieSlice.reducer
