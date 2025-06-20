export interface IResponseFilms {
  total: number;
  totalPages: number;
  items: IFilm[];
}

export interface IFilm {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: ICountry[];
  genres: IGenre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

interface ICountry {
  country: string;
}

interface IGenre {
  genre: string;
}
