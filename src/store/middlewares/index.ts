import { movieApi } from '../../services/movies'

export const rootMiddleware = [movieApi.middleware]
