/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Response } from './Response'

export type Movie = Record<string, string>

export type MovieList = {
  Search: Movie[]
  totalResults: string
  Response: Response
}
