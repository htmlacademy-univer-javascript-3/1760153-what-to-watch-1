import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div style={{textAlign: 'center', padding: '40px'}}>
      <h1>Not Found</h1>
      <p>Вернуться на <Link to="/">главную страницу</Link></p>
    </div>
  );
}

export default NotFound;
