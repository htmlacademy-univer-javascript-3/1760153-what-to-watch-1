import SimCardFilm from '../../components/sim-card-film/sim-card-film';
import Similar from '../../types/similar';

type SimilarListProps = {
  similar: Similar;
}

function SimilarList({ similar }: SimilarListProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similar.map((film) => <SimCardFilm key={film.id} id={film.id} title={film.name} image={film.previewImage} video={film.previewVideoLink}/>)}
      </div>
    </section>
  );
}

export default SimilarList;
