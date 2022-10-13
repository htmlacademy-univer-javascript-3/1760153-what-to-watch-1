import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {ALL_GENRES} from '../const';
import {changeGenre} from './action';

const initialState = {
  currentGenre: ALL_GENRES,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    });
});
