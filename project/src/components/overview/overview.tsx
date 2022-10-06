import {Films} from '../../types/film';

type OverviewProps = {
  film: Films | undefined;
}

function Overview(props: OverviewProps): JSX.Element {
  const {film} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.averageRating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film?.ratingLevel}</span>
          <span className="film-rating__count">{film?.reviews.length} ratings</span>
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
