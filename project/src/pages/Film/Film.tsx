import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmDescription from '../../components/film-description/film-description';
import { useParams, Link } from 'react-router-dom';
import SimilarList from '../../components/similar-list/similar-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { AuthorizationStatus} from '../../const';
import {useEffect} from 'react';
import {setFilmLoadedStatus, setFavoriteCount} from '../../store/action';
import { FilmStatus } from '../../types/film-status';
import {
  changeStatusToView,
  fetchCommentsByID,
  fetchFavoriteFilmsAction,
  fetchFilmByID,
  fetchSimilarByID
} from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';
import NotFound from '../not-found/not-found';

function Film(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector((state) => state.film);
  const similar = useAppSelector((state) => state.similar);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmFoundStatus = useAppSelector((state) => state.isFilmFoundStatus);
  const isFilmLoadedStatus = useAppSelector((state) => state.isFilmLoadedStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFilmLoadedStatus(true));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
    dispatch(setFilmLoadedStatus(false));

  }, [id, authStatus, dispatch]);


  const favoriteCount = useAppSelector((state) => state.favoriteCount);

  const onAddFavoriteClick = () => {
    const filmStatus: FilmStatus = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeStatusToView(filmStatus));

    if (film?.isFavorite) {
      dispatch(setFavoriteCount(favoriteCount - 1));
    } else {
      dispatch(setFavoriteCount(favoriteCount + 1));
    }
  };

  if (!isFilmLoadedStatus) {
    return <LoadingPage />;
  }

  if (!isFilmFoundStatus) {
    return <NotFound />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                    onClick={onAddFavoriteClick}
                  >
                    {
                      film?.isFavorite ? <span>✓</span> :
                        <svg viewBox="0 0 19 20" width="19" height="20">
                          <use xlinkHref="#add"></use>
                        </svg>
                    }
                    <span>My list</span>
                    <span className="film-card__count">{favoriteCount}</span>
                  </button>
                }
                { authStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            <FilmDescription />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarList similar={similar} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;
