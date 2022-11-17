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
export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export const CARDS_COUNT = 8;


export const playerControl = {
  Play: {
    width: 19,
    height: 19,
    xlinkHref: '#play-s',
    desc: 'Play',
    className: 'player__play',
  },

  Pause: {
    width: 14,
    height: 21,
    xlinkHref: '#pause',
    desc: 'Pause',
    className: 'player__play',
  },

  FullScreen: {
    width: 27,
    height: 27,
    xlinkHref: '#full-screen',
    desc: 'Full screen',
    className: 'player__full-screen',
  },
};
