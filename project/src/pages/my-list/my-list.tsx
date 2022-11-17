import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {useAppSelector} from '../../hooks';
import LoadingPage from '../loading-page/loading-page';
import FavoriteFilmCard from '../../components/fav-film-card/fav-film-card';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.favoriteFilms);
  const loadStatus = useAppSelector((state) => state.isDataLoaded);

  if (loadStatus) {
    return(<LoadingPage />);
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films?.map((film) => {
            const keyValue = `${film.posterImage}`;
            return (
              <FavoriteFilmCard
                id={film.id} name={film.name} previewVideoLink={film.previewVideoLink} posterImage={film.posterImage}
                key={keyValue}
              />);
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
