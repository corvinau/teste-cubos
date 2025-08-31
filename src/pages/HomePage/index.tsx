import { useEffect } from 'react';

import { useMovie } from '../../context/MovieContext';

import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';

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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default HomePage;
