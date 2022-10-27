export type Comments = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }}[];

export type Films = {
  id: number,
  name: string,
  year: number,
  genre: string,
  posterImage: string,
  backgroundImage: string,
  videoLink: string,
  previewVideoLink: string,
  averageRating: number,
  ratingLevel: string,
  description: string,
  director: string,
  starring: string[],
  runTime: string,
  isFavorite: boolean,
  reviews: Comments
}
