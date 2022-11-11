export type Movie = Record<string, string>

export interface MovieList {
  Search: Movie[]
  totalResults: string
  response: string
}
