import Tabs from '../tabs/tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewList from '../reviews/reviews';
import { FilmTabs } from '../../const';
import {useAppSelector} from '../../hooks';


function FilmDescription(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const pageTab = useAppSelector((state) => state.filmPageTab);
  if (!film) {
    return (
      <div className="film-card__desc">
        <Tabs currentTab={pageTab} />
      </div>
    );
  }

  return (
    <div className="film-card__desc">
      <Tabs currentTab={pageTab} />

      {pageTab === FilmTabs.Overview && <Overview film={film} />}
      {pageTab === FilmTabs.Details && <Details film={film} />}
      {pageTab === FilmTabs.Reviews && <ReviewList film={film} />}
    </div>
  );
}

export default FilmDescription;
