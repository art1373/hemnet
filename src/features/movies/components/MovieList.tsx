import { useNavigate } from 'react-router-dom'

import { useGetMovieBySearchQuery } from '../services/movies'

export const MovieList = () => {
  const navigate = useNavigate()
  const { isLoading, data, error } = useGetMovieBySearchQuery({
    page: '1',
    query: 'sew',
  })
  if (isLoading) return <div>loading...</div>
  if (error) return <div>Something went wrong!</div>

  return (
    <div>
      {data?.Search.map((m) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <p
          onClick={() =>
            navigate({ pathname: '/detail', search: `?id=${m.imdbID}` })
          }
          key={m.imdbID}
        >
          {m.Title}
        </p>
      ))}
    </div>
  )
}
