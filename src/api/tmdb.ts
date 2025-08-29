import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const getPopularMovies = (page: number) => {
  return tmdb.get('/movie/popular', { params: { page } });
};

export const searchMovies = (query: string, page: number) => {
  return tmdb.get('/search/movie', { params: { query, page } });
};

export const getMovieDetails = (movieId: number) => {
  return tmdb.get(`/movie/${movieId}`);
};

export const getGenres = () => {
  return tmdb.get('/genre/movie/list');
};