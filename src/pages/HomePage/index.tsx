import { useEffect } from 'react';

import { useMovie } from '../../context/MovieContext';

import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';

import './styles.css';

const HomePage = () => {
  const {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    fetchMovies,
    handlePageChange,
  } = useMovie();

  useEffect(() => {
    fetchMovies('', 1);
  }, [fetchMovies]);

  const pageNumbers = Array.from(
    { length: totalPages > 5 ? 5 : totalPages },
    (_, i) => i + 1
  );

  const renderPagination = () => (
    <div className='pagination'>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}>
          {page}
        </button>
      ))}
    </div>
  );

  return (
    <div className='home-page'>
      <SearchBar />
      {loading && <p>Carregando filmes...</p>}
      {error && <p className='error'>{error}</p>}
      {!loading && movies.length === 0 && <p>Nenhum filme encontrado.</p>}
      <div className='container-movie-list'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      {movies.length > 0 && renderPagination()}
    </div>
  );
};

export default HomePage;
