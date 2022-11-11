import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import movieReducer from './features/movies/slices/movieSlice'
import { rootMiddleware } from './services/middlewares'
import { movieApi } from './services/movies'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootMiddleware),
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
