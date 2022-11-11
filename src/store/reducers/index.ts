import movieReducer from '../../features/movies/slices/movieSlice'
import { movieApi } from '../../services/movies'

export const rootReducer = {
  movie: movieReducer,
  [movieApi.reducerPath]: movieApi.reducer,
}
