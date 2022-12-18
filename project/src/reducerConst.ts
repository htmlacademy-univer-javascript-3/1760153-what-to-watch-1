import {Films, Comments} from './types/film';
import Similar from './types/similar';

export enum NameSpace {
  User = 'USER',
  MainScreen = 'MAIN',
  FilmScreen = 'FILM'
}

export type MainData = {
  films: Films[],
  promo: Films | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredFilms: Films[],
  cardCount: number,
}

export type FilmData = {
  film: Films | null,
  similar: Similar,
  comments: Comments,
  filmPageTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadingStatus: boolean | null
}
