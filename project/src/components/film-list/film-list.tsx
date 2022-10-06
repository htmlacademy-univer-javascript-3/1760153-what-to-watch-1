import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films[]
};

function FilmList(props: FilmListProps): JSX.Element {
  const { films } = props;
  const [activeFilm, setActiveFilm] = useState(NaN);
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const keyValue = `${activeFilm}-${film.poster}`;
        return (
          <FilmCard
            film={film}
            key={keyValue}
            isActive={activeFilm === film.id}
            changeState={(activeId: number) => {
              setActiveFilm(activeId);
            }}
          />);
      })}
    </div>
  );
}

export default FilmList;
