import { useState, ChangeEvent } from 'react';

function AddReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({ rating: 0, text: '' });
  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, text: evt.target.value });
  };
  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: parseInt(evt.target.value, 10) });
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
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={fieldChangeHandle}
          value={formData.text}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
