import { resetMainPage } from '../../store/action';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

type FilmCardProps = {
  id: number,
  title: string,
  image: string
}

function SimCardFilm({ id, title, image }: FilmCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
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
