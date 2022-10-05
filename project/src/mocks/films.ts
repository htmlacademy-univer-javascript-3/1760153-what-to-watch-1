import { RatingLevels } from '../const';
import { Films } from '../types/film';

export const films: Films[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Drama',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: true,
    reviews: [{
      id: 1,
      rating: 7.6,
      author: 'Paula Fleri-Soler',
      date: 'December 20, 2016',
      text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
    }, {
      id: 2,
      rating: 7.2,
      author: 'Matthew Lickona',
      date: 'December 20, 2016',
      text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'
    }
    ]
  }, {
    id: 2,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    year: 2018,
    genre: 'Fantasy',
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: true,
    reviews: []
  }, {
    id: 3,
    title: 'Bohemian Rhapsody',
    year: 2018,
    genre: 'Drama',
    poster: 'img/bohemian-rhapsody.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: true,
    reviews: []
  }, {
    id: 4,
    title: 'Macbeth',
    year: 2015,
    genre: 'Drama',
    poster: 'img/macbeth.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: false,
    reviews: []
  }, {
    id: 5,
    title: 'Aviator',
    year: 2005,
    genre: 'Drama',
    poster: 'img/aviator.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: true,
    reviews: []
  }, {
    id: 6,
    title: 'We need to talk about Kevin',
    year: 2011,
    genre: 'Thriller',
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: false,
    reviews: []
  }, {
    id: 7,
    title: 'What We Do in the Shadows',
    year: 2014,
    genre: 'Comedie',
    poster: 'img/what-we-do-in-the-shadows.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: false,
    reviews: []
  }, {
    id: 8,
    title: 'Revenant',
    year: 2015,
    genre: 'Drama',
    poster: 'img/revenant.jpg',
    averageRating: 7.6,
    ratingLevel: RatingLevels.VeryGood,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-className service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    isFavorite: false,
    reviews: []
  }
];
