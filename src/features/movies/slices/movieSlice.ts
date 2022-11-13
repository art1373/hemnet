import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { Movie } from '../models'

export interface MovieState {
  movies: Movie[]
  selectedMovieId: string
  favorites: string[]
}

const initialState: MovieState = {
  favorites: [],
  movies: [],
  selectedMovieId: '',
}

export const movieSlice = createSlice({
  initialState,
  name: 'movie',
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((f) => f !== action.payload)
    },
  },
})

export const { addFavorite, removeFavorite } = movieSlice.actions

export default movieSlice.reducer
