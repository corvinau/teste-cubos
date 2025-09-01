import React from 'react';

import Button from '../Button';

import './styles.css';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pagesToShow = 5;

  const startPage =
    Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-container'>
      <div className='pagination-buttons-container'>
        <Button
          onButtonClick={() => onPageChange(currentPage - 1)}
          nameButton={<ChevronLeft />}
          className='primary'
          disabled={currentPage <= 1}
        />

        {pageNumbers.map((page) => (
          <Button
            key={page}
            onButtonClick={() => onPageChange(page)}
            nameButton={page}
            className='primary'
            disabled={page === currentPage}
          />
        ))}

        <Button
          onButtonClick={() => onPageChange(currentPage + 1)}
          nameButton={<ChevronRight />}
          className='primary'
          disabled={currentPage >= totalPages}
        />
      </div>
      <div className='pagination-info-container'>
        Página {currentPage} de {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
