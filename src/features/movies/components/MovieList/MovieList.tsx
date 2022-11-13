import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Response } from '../../models'
import { useGetMovieBySearchQuery } from '../../services/movies'
import { MovieCard } from '../MovieCard/MovieCard'

export const MovieList = () => {
  const [query, setQuery] = useState('batman')
  const [page, setPage] = useState(1)
  const navigate = useNavigate()
  const { isLoading, data, isError, isSuccess } = useGetMovieBySearchQuery(
    {
      page,
      query,
    },
    { skip: query.length < 3 }
  )

  const onCardClick = useCallback((movie: any) => {
    navigate({ pathname: '/detail', search: `?id=${movie.imdbID}` })
  }, [])

  return (
    <section className="grid place-items-center">
      <input
        type="text"
        value={query}
        placeholder="search movie by title"
        onChange={(e) => setQuery(e.target.value)}
        className="mt-5 w-1/2	rounded-lg"
      />
      {isLoading && <div>loading...</div>}
      {isError && <div>Something went wrong!</div>}
      <div className=" lg:grid-cols-auto grid place-items-center gap-4 py-10  sm:grid-cols-3 md:grid-cols-6">
        {isSuccess &&
          data.Response === Response.TRUE &&
          data?.Search.map((m) => (
            <MovieCard
              key={m.imdbID}
              poster={m.Poster}
              onClick={() => onCardClick(m)}
            />
          ))}
      </div>

      <div className="fixed bottom-px	flex h-10 w-full justify-center gap-40 bg-white">
        <button
          onClick={() => {
            if (page === 1) return
            return setPage((prev) => prev - 1)
          }}
        >
          previous page
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>next page</button>
      </div>
    </section>
  )
}
