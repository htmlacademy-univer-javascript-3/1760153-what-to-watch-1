import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, AuthorizationStatus, CARDS_COUNT, FilmTabs } from '../const';
import {Films, Comments} from '../types/film';
import Similar from '../types/similar';
import {
  changeGenre,
  increaseCardCount,
  loadFilms,
  requireAuthorization,
  resetCardCount,
  resetMainPage,
  setError,
  setDataLoadedStatus,
  loadComments,
  loadFilm,
  loadSimilar,
  loadPromo,
  changeFilmTab,
  setFilmFoundStatus,
  setFilmLoadedStatus,
  loadFavoriteFilms,
  setFavoriteCount
} from './action';
import { getFilmsByGenre } from '../utils/genresFilter';
import Favorite from '../types/favorite';

type InitialState = {
  films: Films[];
  currentGenre: string,
  filteredFilms: Films[],
  cardCount: number,
  authorizationStatus: string,
  isDataLoaded: boolean,
  error: string | null,
  avatar: string | null,

  comments: Comments,
  similar: Similar,
  film: Films | null,
  promo: Films | null,
  filmPageTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadedStatus: boolean | null,

  favoriteFilms: Favorite,
  avatarUrl: string,
  favoriteCount: number
}

const initialState: InitialState = {
  currentGenre: ALL_GENRES,
  films: [],
  filteredFilms: [],
  cardCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  avatar: null,
  comments: [],
  similar: [],
  film: null,
  promo: null,
  filmPageTab: FilmTabs.Overview as string,
  isFilmFoundStatus: null,
  isFilmLoadedStatus: null,
  favoriteFilms: [],
  avatarUrl: 'img/avatar.jpg',
  favoriteCount: 0
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainPage, (state) => {
      state.currentGenre = ALL_GENRES;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_COUNT ? state.films.length : CARDS_COUNT;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = getFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_COUNT ?
        filteredFilms.length :
        CARDS_COUNT;
    })

    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + CARDS_COUNT) < state.filteredFilms.length ?
        state.cardCount + CARDS_COUNT :
        state.filteredFilms.length;
    })

    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_COUNT ?
        state.filteredFilms.length :
        8;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.cardCount = CARDS_COUNT;
    })
    .addCase(setFavoriteCount, (state, action) =>{
      state.favoriteCount = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(setFilmLoadedStatus, (state, action) => {
      state.isFilmLoadedStatus = action.payload;
    })
    .addCase(setFilmFoundStatus, (state, action) => {
      state.isFilmFoundStatus = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});
