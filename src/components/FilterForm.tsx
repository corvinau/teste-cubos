import React from 'react';

const FilterForm = () => {
  // Use state local para os filtros
  const [selectedGenre, setSelectedGenre] = React.useState('');
  const [releaseYear, setReleaseYear] = React.useState('');

  // Lógica para aplicar os filtros na busca
  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Filtros aplicados:', { selectedGenre, releaseYear });
    // Adicionar lógica de busca filtrada aqui
  };

  return (
    <form onSubmit={handleApplyFilters}>
      {/* Exemplo de filtro por gênero */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value=''>Todos os Gêneros</option>
        {/* Adicionar opções de gênero dinamicamente (pode vir do contexto) */}
      </select>
      {/* Exemplo de filtro por ano */}
      <input
        type='number'
        placeholder='Ano de Lançamento'
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <button type='submit'>Aplicar Filtros</button>
    </form>
  );
};

export default FilterForm;
