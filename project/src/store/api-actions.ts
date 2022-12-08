import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Films, Comments, UserComment} from '../types/film';
import Similar from '../types/similar';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {
  loadFilms,
  loadFavoriteFilms,
  changeFilmStatus,
  changePromoStatus,
  requireAuthorization,
  setError,
  setAvatar,
  redirectToRoute,
  loadFilm,
  loadSimilar,
  loadComments,
  loadPromo,
  setFilmFoundStatus,
  setFilmLoadedStatus,
  setDataLoadedStatus
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {store} from './index';
import Favorite from '../types/favorite';
import { FilmStatus } from '../types/film-status';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Promo);
    dispatch(loadPromo(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAvatar(avatarUrl));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setAvatar(null));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchFilmByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${filmId}`);
      dispatch(loadFilm(data));
      dispatch(setFilmLoadedStatus(true));
      dispatch(setFilmFoundStatus(true));
    } catch {
      dispatch(setFilmLoadedStatus(true));
      dispatch(setFilmFoundStatus(false));
    }
  },
);

export const fetchCommentsByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadComments(data));
  },
);

export const fetchSimilarByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Similar>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    dispatch(loadSimilar(data));
  },
);

export const changeStatusToView = createAsyncThunk<void, FilmStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeStatusToView',
  async ({filmId: id, status: isFavorite}, { dispatch, extra: api}) => {
    const {data} = await api.post<Films>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
    dispatch(changeFilmStatus(data));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadFavoriteFilms',
  async (_arg, { dispatch, extra: api}) => {
    const {data} = await api.get<Favorite>(APIRoute.Favorite);
    dispatch(loadFavoriteFilms(data));
  },
);

export const changePromoStatusToView = createAsyncThunk<void, FilmStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changePromoStatusToView',
  async ({filmId: id, status: isFavorite}, { dispatch, extra: api}) => {
    const {data} = await api.post<Films>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
    dispatch(changePromoStatus(data));
  },
);

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    await api.post<UserComment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}`));
    dispatch(setDataLoadedStatus(false));
  },
);

