import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../../api/tmdb';

import './styles.css';

interface MovieDetails {
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  budget: number;
  poster_path: string;
}

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getMovieDetails(Number(id));
        setMovie(response.data);
      } catch (err) {
        setError('Falha ao carregar os detalhes do filme.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  if (error) {
    return <p className='error'>{error}</p>;
  }

  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className='movie-details-page'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h3>({movie.original_title})</h3>
      <p>**Lançamento:** {new Date(movie.release_date).toLocaleDateString()}</p>
      <p>**Orçamento:** {formatCurrency(movie.budget)}</p>
      <p>**Descrição:** {movie.overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
