import { movieApi } from '../../features/movies/services/movies'
import movieReducer from '../../features/movies/slices/movieSlice'

export const rootReducer = {
  movie: movieReducer,
  [movieApi.reducerPath]: movieApi.reducer,
}
