import { Films } from '../../types/film';
import { useState } from 'react';
import FilmCard from '../../components/film-card/film-card';

type SimilarListProps = {
  similar: Films[];
}

function SimilarList({ similar }: SimilarListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(NaN);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similar.map((film) => (
          <FilmCard key={film.id}
            film={film}
            isActive={activeFilm === film.id}
            OnChangeActiveFilm={(activeId: number) => { setActiveFilm(activeId); }}
          />
        )
        )}
      </div>
    </section>
  );
}

export default SimilarList;
