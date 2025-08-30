import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import { getPopularMovies, searchMovies } from '../api/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface MovieContextType {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  searchTerm: string;
  fetchMovies: (query: string, page: number) => void;
  setSearchTerm: (term: string) => void;
  handlePageChange: (page: number) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = useCallback(
    async (query = '', page = 1) => {
      setLoading(true);
      setError(null);
      try {
        const response = query
          ? await searchMovies(query, page)
          : await getPopularMovies(page);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setCurrentPage(page);

        console.log(response.data);
      } catch (err) {
        setError('Falha ao buscar filmes. Tente novamente mais tarde.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [setMovies, setTotalPages, setCurrentPage, setLoading, setError]
  ); // Adicione todas as dependências aqui

  const handlePageChange = useCallback(
    (page: number) => {
      fetchMovies(searchTerm, page);
    },
    [fetchMovies, searchTerm]
  );

  const value = {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    searchTerm,
    fetchMovies,
    setSearchTerm,
    handlePageChange,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovie = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovie deve ser usado dentro de um MovieProvider');
  }
  return context;
};

export default MovieProvider;
