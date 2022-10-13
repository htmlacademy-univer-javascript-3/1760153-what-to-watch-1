import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';
import ShowMoreBtn from '../show-more-btn/show-more-btn';


function FilmList(): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(NaN);
  const films = useAppSelector((state) => state.filteredFilms);
  const cardCount = useAppSelector((state) => state.cardCount);
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => {
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
      <ShowMoreBtn isAllCardsLoaded={cardCount !== films.length} />
    </>
  );
}

export default FilmList;
