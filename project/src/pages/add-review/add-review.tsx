import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { useParams, Link } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {setDataLoadedStatus} from '../../store/action';
import LoadingPage from '../loading-page/loading-page';
import {useEffect} from 'react';
import {fetchFilmByID} from '../../store/api-actions';


function AddReview(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector((state) => state.film);
  const loadStatus = useAppSelector((state) => state.isDataLoaded);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(setDataLoadedStatus(false));
  }, [id, dispatch]);

  if (loadStatus) {
    return(<LoadingPage />);
  }
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
          <img src={film?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
}

export default AddReview;
