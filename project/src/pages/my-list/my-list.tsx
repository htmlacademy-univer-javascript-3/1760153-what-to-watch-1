import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { Films } from '../../types/film';
import UserBlock from '../../components/user-block/user-block';
import { MouseEvent, useState } from 'react';
import FilmCard from '../../components/film-card/film-card';

type MyListProps = {
  films: Films[]
};

function MyList(props: MyListProps): JSX.Element {
  const { films } = props;
  const [activeFilm, setActiveFilm] = useState(1);
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
            const keyValue = `${activeFilm}-${film.poster}`;
            return (
              <FilmCard
                film={film}
                key={keyValue}
                mouseOverHandler={(e: MouseEvent<HTMLDivElement>) => {
                  e.preventDefault();
                  setActiveFilm(film.id);
                }}
              />);
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
