import Tabs from '../tabs/tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewList from '../reviews/reviews';
import { Films } from '../../types/film';
import { useState } from 'react';
import { FilmTabs } from '../../const';

type FilmDescProps = {
  film: Films | undefined;
}

function FilmDescription(props: FilmDescProps): JSX.Element {
  const { film } = props;
  const [pageTab, setPageTab] = useState<string>(FilmTabs.Overview);

  return (
    <div className="film-card__desc">
      <Tabs
        currentTab={pageTab}
        updateTab={(tabName: string) => {
          setPageTab(tabName);
        }}
      />

      {pageTab === FilmTabs.Overview && <Overview film={film} />}
      {pageTab === FilmTabs.Details && <Details film={film} />}
      {pageTab === FilmTabs.Reviews && <ReviewList film={film} />}
    </div>
  );
}

export default FilmDescription;
