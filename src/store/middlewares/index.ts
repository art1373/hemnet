import { movieApi } from '../../features/movies/services/movies'

export const rootMiddleware = [movieApi.middleware]
