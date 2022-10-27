import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Genres from '../../components/genres/genres';
import UserBlock from '../../components/user-block/user-block';
import {Films} from '../../types/film';
import { Link } from 'react-router-dom';

type MainProps = {
  promo: Films,
};

function Main(props: MainProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promo.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promo.genre}</span>
                <span className="film-card__year">{props.promo.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${props.promo.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
