import React from 'react';

import { useMovie } from '../../context/MovieContext';

import Button from '../Button';

import { Search } from '../../assets/icons/Search.tsx';

import './styles.css';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, fetchMovies } = useMovie();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies(searchTerm, 1);
  };

  return (
    <div className='filter-container'>
      <form onSubmit={handleSearch} className='filter-container-form'>
        <input
          className='filter-container-input'
          type='text'
          placeholder='Pesquise por filmes'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button type='submit' nameButton={<Search />} className='secondary' />
      </form>
    </div>
  );
};

export default SearchBar;
