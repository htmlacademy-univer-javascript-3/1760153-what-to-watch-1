import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {Films} from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import { useParams, Link } from 'react-router-dom';

type FilmProps = {
  films: Films[]
};

function Film(props: FilmProps): JSX.Element {
  const {films} = props;
  const id = Number(useParams().id);
  const film = films.find((x) => x.id === id);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.title}</h2>
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link className="btn film-card__button" to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.poster} alt={film?.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#todo" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#todo" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#todo" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film?.averageRating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{film?.ratingLevel}</span>
                  <span className="film-rating__count">{film?.reviews.length} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film?.description}</p>

                <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {film?.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
