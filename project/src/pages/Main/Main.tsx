import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Genres from '../../components/genres/genres';
import UserBlock from '../../components/user-block/user-block';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FilmStatus } from '../../types/film-status';
import { changePromoStatusToView } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { setFavoriteCount } from '../../store/action';

function Main(): JSX.Element {
  const promo = useAppSelector((state) => state.promo);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteCount = useAppSelector((state) => state.favoriteCount);

  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const filmStatus: FilmStatus = {
      filmId: promo?.id || NaN,
      status: promo?.isFavorite ? 0 : 1
    };

    dispatch(changePromoStatusToView(filmStatus));

    if (promo?.isFavorite) {
      dispatch(setFavoriteCount(favoriteCount - 1));
    } else {
      dispatch(setFavoriteCount(favoriteCount + 1));
    }
  };

  if (!promo) {
    return <section className="film-card"></section>;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promo.id}`} className="btn btn--play film-card__button" type="button">
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
                      promo?.isFavorite ? <span>✓</span> :
                        <svg viewBox="0 0 19 20" width="19" height="20">
                          <use xlinkHref="#add"></use>
                        </svg>
                    }
                    <span>My list</span>
                    <span className="film-card__count">{favoriteCount}</span>
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <FilmList />
        </section>

        <Footer />
      </div>
    </>);
}

export default Main;
