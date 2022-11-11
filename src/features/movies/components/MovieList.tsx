import { useGetMovieBySearchQuery } from '../services/movies'

export const MovieList = () => {
  const { isLoading, data, error } = useGetMovieBySearchQuery({
    page: '1',
    query: 'sex',
  })

  // eslint-disable-next-line no-console
  console.log({ data, error, isLoading })

  return <div>MovieList</div>
}
