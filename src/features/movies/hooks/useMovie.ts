import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import type { RootState } from '../../../store/store'
import { useGetMovieByIdQuery } from '../services/movies'
import { addFavorite, removeFavorite } from '../slices/movieSlice'

export const useMovie = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.movie.favorites)
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { isLoading, isError, data, isSuccess } = useGetMovieByIdQuery({ id })
  const isMovieFavorite = favorites.includes(id)

  const addToFavorite = () => dispatch(addFavorite(id))

  const removeFromFavorite = () => dispatch(removeFavorite(id))

  const isMovieFetched = useMemo(() => isSuccess && !!data, [data])

  return {
    addToFavorite,
    data,
    isError,
    isLoading,
    isMovieFavorite,
    isMovieFetched,
    removeFromFavorite,
  }
}
