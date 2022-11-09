import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';
import ShowMoreBtn from '../show-more-btn/show-more-btn';


function FilmList(): JSX.Element {
  const films = useAppSelector((state) => state.filteredFilms);
  const cardCount = useAppSelector((state) => state.cardCount);
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => {
          const keyValue = `${film.posterImage}`;
          return (
            <FilmCard
              film={film}
              key={keyValue}
            />);
        })}
      </div>
      <ShowMoreBtn isAllCardsLoaded={cardCount !== films.length} />
    </>
  );
}

export default FilmList;
