import { createBrowserRouter } from 'react-router-dom'

import { MovieDetail, MovieList } from '../features/movies/components'

export const router = createBrowserRouter([
  {
    element: <MovieList />,
    path: '/',
  },
  {
    element: <MovieDetail />,
    path: '/detail',
  },
])
