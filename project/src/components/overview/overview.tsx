import {Films} from '../../types/film';
import {getFilmRating} from '../../utils/film-description';

type OverviewProps = {
  film: Films | null;
}

function Overview(props: OverviewProps): JSX.Element {
  const {film} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating ?? 0.0}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getFilmRating(film?.rating ?? 0.0)}</span>
          <span className="film-rating__count">{film?.scoresCount ?? 0} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film?.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
