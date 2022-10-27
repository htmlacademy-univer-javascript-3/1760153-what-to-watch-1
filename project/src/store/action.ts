import { createAction } from '@reduxjs/toolkit';
import {Films, Comments} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';
import Similar from '../types/similar';

export const changeGenre = createAction<{ currentGenre: string }>('films/changeGenre');
export const resetMainPage = createAction('main/resetState');
export const increaseCardCount = createAction('main/increaseCardCount');
export const resetCardCount = createAction('main/resetCardCount');
export const loadFilms = createAction<Films[]>('data/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
export const loadFilm = createAction<Films>('data/loadFilmById');
export const loadComments = createAction<Comments>('data/loadCommentsById');
export const loadSimilar = createAction<Similar>('data/loadSimilarById');
export const setAvatar = createAction<string | null>('user/avatar');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
