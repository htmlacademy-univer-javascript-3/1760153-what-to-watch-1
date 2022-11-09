import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { Films } from '../../types/film';
import UserBlock from '../../components/user-block/user-block';
import FilmCard from '../../components/film-card/film-card';

type MyListProps = {
  films: Films[]
};

function MyList(props: MyListProps): JSX.Element {
  const { films } = props;
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
          {films.map((film) => {
            const keyValue = `${film.posterImage}`;
            return (
              <FilmCard
                film={film}
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
