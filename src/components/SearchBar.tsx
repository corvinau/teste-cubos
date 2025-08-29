import React from 'react';
import { useMovie } from '../context/MovieContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, fetchMovies } = useMovie();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies(searchTerm, 1);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Pesquise um filme...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type='submit'>Pesquisar</button>
    </form>
  );
};

export default SearchBar;
