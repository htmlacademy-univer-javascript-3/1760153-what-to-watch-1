import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';

function UserBlock(): JSX.Element {
  const avatar = useAppSelector((state) => state.avatarUrl);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={`${AppRoute.SignIn}`}
          >
            Login
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={avatar || ''} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
