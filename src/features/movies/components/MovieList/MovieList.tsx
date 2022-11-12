import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetMovieBySearchQuery } from '../../services/movies'
import { MovieCard } from '../MovieCard/MovieCard'

export const MovieList = () => {
  const navigate = useNavigate()
  const { isLoading, data, error } = useGetMovieBySearchQuery({
    page: 1,
    query: 'Batman',
  })

  const onCardClick = useCallback((movie: any) => {
    navigate({ pathname: '/detail', search: `?id=${movie.imdbID}` })
  }, [])

  if (isLoading) return <div>loading...</div>
  if (error) return <div>Something went wrong!</div>

  return (
    <div className="lg:grid-cols-auto grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-4">
      {data?.Search.map((m) => (
        <MovieCard
          id={m.imdbID}
          title={m.Title}
          poster={m.Poster}
          year={m.Year}
          onClick={() => onCardClick(m)}
        />
      ))}
    </div>
  )
}
