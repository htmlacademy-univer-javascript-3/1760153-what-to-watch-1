import { ALL_GENRES } from '../const';
import { Films } from '../types/film';

export const getAllGenres = (films: Films[]) => (
  [...new Set([ALL_GENRES, ...films.map((film) => film.genre)])]
);

export const getFilmsByGenre = (films: Films[], genre: string) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
