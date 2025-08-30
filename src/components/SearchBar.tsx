import React, { useState } from 'react';
import { useMovie } from '../context/MovieContext';

import FilterForm from '../components/FilterForm';
import Button from './Button';

import '../styles/components/SearchBar.css';

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { searchTerm, setSearchTerm, fetchMovies } = useMovie();

  const toggleFilter = () => {
    setIsVisible(!isVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies(searchTerm, 1);
  };

  return (
    <div className='filter-container'>
      <div className='filter-container-search'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Pesquise um filme...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>Pesquisar</button>
        </form>

        <Button
          onButtonClick={toggleFilter}
          nameButton={<img src='src/assets/icons/filter.svg' alt='Filtro' />}
        />
      </div>

      <div className='filter-container-form'>{isVisible && <FilterForm />}</div>
    </div>
  );
};

export default SearchBar;
