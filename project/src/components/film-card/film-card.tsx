import {Films} from '../../types/film';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: Films,
  mouseOverHandler: (evt: MouseEvent<HTMLDivElement>) => void;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, mouseOverHandler} = props;
  const {id, name: title, poster} = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={mouseOverHandler}>
      <div className="small-film-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
