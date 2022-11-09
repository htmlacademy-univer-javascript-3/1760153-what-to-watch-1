import { resetMainPage } from '../../store/action';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {useState} from 'react';
import PlayerPreview from '../player-preview/player-preview';

type FilmCardProps = {
  id: number,
  title: string,
  image: string,
  video: string
}

function SimCardFilm({ id, title, image, video }: FilmCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false);
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      <div className="small-film-card__image">
        {
          isActive ? <PlayerPreview previewImage={image} previewVideo={video} />
            : <img src={image} alt={title} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${id}`}
          onClick={() => {
            dispatch(resetMainPage());
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default SimCardFilm;
