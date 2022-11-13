import { ClipLoader } from 'react-spinners'

import { useMovie } from '../../hooks'
import { addFavorite, removeFavorite } from '../../slices/movieSlice'

export const MovieDetail = () => {
  const {
    data,
    isError,
    isLoading,
    isMovieFetched,
    addToFavorite,
    removeFromFavorite,
    isMovieFavorite,
  } = useMovie()

  return (
    <section className="grid place-items-center">
      {isLoading && (
        <div className="absolute inset-y-60">
          <ClipLoader color="#36d7b7" size={55} />
        </div>
      )}
      {isError && <div>Something went wrong!</div>}
      {isMovieFetched && (
        <div className="m-20 text-white">
          <img className="rounded-lg" src={data?.Poster} alt="movie-poster" />
          <span className="text-md  text-rose-500">
            {data?.Type}: {data?.Genre}
          </span>
          <span className="mx-5">{data?.Rated}</span>
          <div className="mt-20">
            <h1 className="text-bold mt-5 text-xl">
              {data?.Title ?? ''}({data?.Year})
            </h1>
            <h2 className="text-blue-500">{data?.Language}</h2>
            <h2 className="text-cyan-500">Rating: {data?.imdbRating}</h2>
            <p className="mt-5">Starring: {data?.Actors}</p>
            <p className="mt-5 w-1/2 text-amber-200">{data?.Plot}</p>
          </div>
          <button
            onClick={() =>
              isMovieFavorite ? removeFromFavorite() : addToFavorite()
            }
            className={` mt-10 rounded-full p-2 ${
              isMovieFavorite ? 'bg-rose-400' : 'bg-blue-500'
            }`}
          >
            {isMovieFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      )}
    </section>
  )
}
