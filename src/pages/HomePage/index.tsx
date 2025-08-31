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
    <div className='container-pagination'>
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
    <div className='container-home-page'>
      <SearchBar />

      <div className='container-movie-list'>
        <div className='container-movie-messages'>
          {loading && <h3>Carregando filmes</h3>}

          {error && <h3>Erro: {error}</h3>}

          {!loading && movies.length === 0 && <h3>Nenhum filme encontrado.</h3>}
        </div>

        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      {movies.length > 0 && renderPagination()}
    </div>
  );
};

export default HomePage;
