import Main from '../../pages/Main';

type AppScreenProps = {
  title: string,
  genre: string,
  date: number
};

function App({title, genre, date}: AppScreenProps): JSX.Element {
  return <Main title={title} genre={genre} date={date} />;
}

export default App;
