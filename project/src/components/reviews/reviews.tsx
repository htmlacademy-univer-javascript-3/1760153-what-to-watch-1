import { Comments } from '../../types/film';
import { convertDate } from '../../utils/film-description';

type ReviewsProps = {
  comments: Comments
}

function ReviewList({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments?.map((review) => (
          <div className="review" key={`review-${review.id}`}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time
                  className="review__date"
                  dateTime={review.date}
                >
                  {convertDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>))}
      </div>
    </div>
  );
}

export default ReviewList;
