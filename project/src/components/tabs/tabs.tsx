import { FilmTabs } from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeFilmTab} from '../../store/action';

type TabsProps = {
  currentTab: string
};

function Tabs(props: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { currentTab } = props;
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === FilmTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="#overviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmTabs.Overview}));
              }
            }
          >
            {FilmTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="#details"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmTabs.Details}));
              }
            }
          >
            {FilmTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="#reviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmTabs.Reviews}));
              }
            }
          >
            {FilmTabs.Reviews}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
