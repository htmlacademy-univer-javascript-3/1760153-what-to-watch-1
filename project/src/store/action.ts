import { createAction } from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction<{ currentGenre: string }>('films/changeGenre');
export const resetMainPage = createAction('main/resetState');
export const increaseCardCount = createAction('main/increaseCardCount');
export const resetCardCount = createAction('main/resetCardCount');
export const loadFilms = createAction<Films[]>('data/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
