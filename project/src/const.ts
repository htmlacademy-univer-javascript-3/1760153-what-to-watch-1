export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RatingLevels {
  VeryGood = 'Very good',
  Good = 'Good',
  Normal = 'Normal',
  Bad = 'Bad'
}

export enum FilmTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum GenresList {
  All = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers'
}

export const ALL_GENRES = 'All genres';
