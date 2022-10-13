import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks';
import {getFilmsByGenre} from '../../utils/genresFilter';

type FilmListProps = {
  films: Films[]
};

function FilmList(props: FilmListProps): JSX.Element {
  const { films } = props;
  const [activeFilm, setActiveFilm] = useState(NaN);
  const currentGenre = useAppSelector((state) => state.currentGenre);
  return (
    <div className="catalog__films-list">
      {getFilmsByGenre(films, currentGenre).map((film) => {
        const keyValue = `${activeFilm}-${film.poster}`;
        return (
          <FilmCard
            film={film}
            key={keyValue}
            isActive={activeFilm === film.id}
            OnChangeActiveFilm={(activeId: number) => {
              setActiveFilm(activeId);
            }}
          />);
      })}
    </div>
  );
}

export default FilmList;
