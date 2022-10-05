import { useState, MouseEvent } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films[]
};

function FilmList(props: FilmListProps): JSX.Element {
  const { films } = props;
  const [activeFilm, setActiveFilm] = useState(1);
  return (
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
  );
}

export default FilmList;
