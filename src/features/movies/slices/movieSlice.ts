import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {},
})

export default movieSlice.reducer
