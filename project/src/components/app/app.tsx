import Main from '../../pages/main/Main';

import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Film from '../../pages/film/Film';
import Player from '../../pages/player/Player';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/film';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils/check-auth';
import LoadingPage from '../../pages/loading-page/loading-page';
import {browserHistory} from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

type AppScreenProps = {
  films: Films[]
};

function App({ films }: AppScreenProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main promo={films[0]} />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<Film/>} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyList films={films.filter((film) => film.isFavorite)} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReview films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
