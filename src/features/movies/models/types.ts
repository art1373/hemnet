export type Movie = Record<string, string>

export type MovieList = {
  Search: Movie[]
  totalResults: string
  response: string
}
