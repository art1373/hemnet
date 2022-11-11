/* eslint-disable no-console */
import { useSearchParams } from 'react-router-dom'

import { useGetMovieByIdQuery } from '../services/movies'

export const MovieDetail = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''

  const { isLoading, isError, data } = useGetMovieByIdQuery({ id })
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Something went wrong!</div>

  return (
    <div>
      MovieDetail of {data?.Title ?? ''} the actors are {data?.Actors}
    </div>
  )
}
