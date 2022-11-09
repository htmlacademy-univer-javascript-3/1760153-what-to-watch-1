import { Films } from '../../types/film';
import { Link } from 'react-router-dom';
import PlayerPreview from '../player-preview/player-preview';
import {useAppDispatch} from '../../hooks';
import {resetMainPage} from '../../store/action';
import {useState} from 'react';

type FilmCardProps = {
  film: Films
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { film } = props;

  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="small-film-card__image">
        {
          isActive ? <PlayerPreview previewImage={film.posterImage} previewVideo={film.previewVideoLink} />
            : <img src={film.posterImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} onClick={() => (dispatch(resetMainPage()))}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
