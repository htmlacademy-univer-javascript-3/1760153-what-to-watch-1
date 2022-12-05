import {ChangeEvent, FormEvent, useState} from 'react';
import {UserComment} from '../../types/user-comment';
import {postComment} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';

function AddReviewForm(): JSX.Element {
  const id = Number(useParams().id);

  const [formData, setFormData] = useState({
    rating: 8,
    reviewText: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const textareaChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, reviewText: evt.target.value});

    if (evt.target.value.length > 50 && evt.target.value.length < 400) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: parseInt(evt.target.value, 10)});
    if (evt.target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({comment: formData.reviewText, rating: formData.rating, filmId: id.toString()});
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };
  const indexes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const stars = indexes.map((item) => (
    <>
      <input className="rating__input" id={`star-${item}`} type="radio" name="rating"
        onChange={ratingChangeHandle}
        value={item}
        checked={formData.rating === item}
      />
      <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
    </>
  )
  );
  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {stars}
        </div>
      </div>

      <div className="add-review__text" style={{background: 'rgba(255,255,255,.24)'}}>
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={textareaChangeHandle}
          value={formData.reviewText}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
