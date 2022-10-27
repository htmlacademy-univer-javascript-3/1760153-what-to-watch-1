import { Films } from '../../types/film';
import { Link } from 'react-router-dom';
import PlayerPreview from '../player-preview/player-preview';
import {useAppDispatch} from '../../hooks';
import {resetMainPage} from '../../store/action';

type FilmCardProps = {
  film: Films,
  OnChangeActiveFilm: (id: number) => void;
  isActive: boolean
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { film, OnChangeActiveFilm, isActive } = props;
  const { id, name, posterImage, previewVideoLink } = film;
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => OnChangeActiveFilm(id)}
      onMouseLeave={() => OnChangeActiveFilm(NaN)}
    >
      <div className="small-film-card__image">
        {
          isActive ? <PlayerPreview previewImage={posterImage} previewVideo={previewVideoLink} />
            : <img src={posterImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} onClick={() => (dispatch(resetMainPage()))}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
