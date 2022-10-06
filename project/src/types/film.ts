export type FilmReview = {
  id: number,
  rating: number,
  author: string,
  date: string,
  text: string
}

export type Films = {
  id: number,
  name: string,
  year: number,
  genre: string,
  poster: string,
  backgroundImage: string,
  videoLink: string,
  previewVideoLink: string,
  averageRating: number,
  ratingLevel: string,
  description: string,
  director: string,
  starring: string[],
  isFavorite: boolean,
  reviews: FilmReview[]
}
