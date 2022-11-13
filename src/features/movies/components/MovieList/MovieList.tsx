import { ClipLoader } from 'react-spinners'

import { Pagination } from '../../../../common/components'
import { useMovieList } from '../../hooks'
import type { Movie } from '../../models'
import { MovieCard } from '../MovieCard/MovieCard'

export const MovieList = () => {
  const {
    page,
    query,
    setQuery,
    setPage,
    isLoading,
    isError,
    isDataReady,
    data,
    onCardClick,
  } = useMovieList()

  return (
    <section className="grid place-items-center">
      <input
        type="text"
        value={query}
        placeholder="search movie by title"
        onChange={(e) => setQuery(e.target.value)}
        className="mt-5 w-1/2	rounded-lg"
      />
      {isLoading && <ClipLoader color="#36d7b7" size={55} />}
      {isError && <div>Something went wrong!</div>}
      <div className=" lg:grid-cols-auto grid place-items-center gap-4 py-10  sm:grid-cols-3 md:grid-cols-6">
        {isDataReady &&
          data?.Search.map((m: Movie) => (
            <MovieCard
              key={m.imdbID}
              poster={m.Poster}
              onClick={() => onCardClick(m)}
            />
          ))}
      </div>
      {isDataReady && <Pagination page={page} setPage={setPage} />}
    </section>
  )
}
