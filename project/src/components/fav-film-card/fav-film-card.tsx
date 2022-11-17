import { Link } from 'react-router-dom';
import PlayerPreview from '../player-preview/player-preview';
import { useAppDispatch } from '../../hooks';
import { resetMainPage } from '../../store/action';
import { useState } from 'react';

type FilmCardProps = {
  id: number,
  posterImage: string,
  previewVideoLink: string,
  name: string
};

function FavoriteFilmCard(props: FilmCardProps): JSX.Element {
  const { id, posterImage, previewVideoLink, name } = props;

  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
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

export default FavoriteFilmCard;
