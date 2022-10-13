import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { ALL_GENRES } from '../const';
import {
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetMainPage
} from './action';
import { getFilmsByGenre } from '../utils/genresFilter';

const initialState = {
  currentGenre: ALL_GENRES,
  films: films,
  filteredFilms: films,
  cardCount: films.length < 8 ? films.length : 8
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainPage, (state) => {
      state.currentGenre = ALL_GENRES;
      state.filteredFilms = films;
      state.cardCount = films.length < 8 ? films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = getFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < 8 ?
        filteredFilms.length :
        8;
    })

    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + 8) < state.filteredFilms.length ?
        state.cardCount + 8 :
        state.filteredFilms.length;
    })

    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < 8 ?
        state.filteredFilms.length :
        8;
    });
});
