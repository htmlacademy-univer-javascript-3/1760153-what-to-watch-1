import { Films } from '../../types/film';
import {getRuntime} from '../../utils/film-description';

type DetailsProps = {
  film: Films | null;
}

function Details(props: DetailsProps): JSX.Element {
  const { film } = props;
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film?.starring.map((star) => <>{star}<br /></>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRuntime(+(film?.runTime ?? 0))}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
