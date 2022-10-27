import {Films} from '../../types/film';

type OverviewProps = {
  film: Films | null;
}

function Overview(props: OverviewProps): JSX.Element {
  const {film} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.averageRating ?? 0.0}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film?.ratingLevel ?? 'Normal'}</span>
          <span className="film-rating__count">{film?.reviews?.length ?? 0} ratings</span>
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
