import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const filmData = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
};

root.render(
  <React.StrictMode>
    <App title={filmData.title} genre={filmData.genre} date={filmData.date} films={films} />
  </React.StrictMode>
);
