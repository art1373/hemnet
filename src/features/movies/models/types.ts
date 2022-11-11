export interface Movie {
  title: string
  year: string
  imdbID: string
  type: string
  poster: string
}

export interface MovieList {
  search: Movie[]
  totalResults: string
  response: string
}
