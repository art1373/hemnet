import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Response } from '../models'
import { useGetMovieBySearchQuery } from '../services/movies'

export const useMovieList = () => {
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

  const isDataReady = useMemo(
    () => data?.Response === Response.TRUE && isSuccess && data?.Search.length,
    [data]
  )

  return {
    data,
    isDataReady,
    isError,
    isLoading,
    onCardClick,
    page,
    query,
    setPage,
    setQuery,
  }
}
