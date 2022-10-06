import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {Films} from '../../types/film';
import { useParams, Link } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewProps = {
  films: Films[]
};

function AddReview(props: AddReviewProps): JSX.Element {
  const {films} = props;
  const id = Number(useParams().id);
  const film = films.find((x) => x.id === id);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${id}`}>{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
}

export default AddReview;
