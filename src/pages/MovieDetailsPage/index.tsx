import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails, getMovieVideos } from '../../api/tmdb';

import { useMovie } from '../../context/MovieContext';

import CircularProgressBar from '../../components/CircularProgressBar';

import './styles.css';

interface Genre {
  id: number;
  name: string;
}

interface LanguageDetails {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Video {
  key: string;
  site: string;
  type: string;
  name: string;
}

interface MovieDetails {
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  budget: number;
  poster_path: string;
  genres: Genre[];
  backdrop_path: string;
  original_language: string;
  popularity: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  spoken_languages: LanguageDetails[];
}

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [trailers, setTrailers] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { languages } = useMovie();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getMovieDetails(Number(id));
        setMovie(response.data);

        const videosResponse = await getMovieVideos(Number(id));
        const foundTrailers = videosResponse.data.results.filter(
          (video: Video) => video.site === 'YouTube' && video.type === 'Trailer'
        );
        setTrailers(foundTrailers.slice(0, 1));
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
    return (
      <div className='movie-details-messages-container'>
        <h3>Carregando detalhes...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className='movie-details-messages-container'>
        <h3>{error}</h3>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className='movie-details-messages-container'>
        <h3>Filme não encontrado.</h3>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getFullLanguageName = (iso: string) => {
    const language = languages.find((lang) => lang.iso_639_1 === iso);
    return language ? language.english_name : iso;
  };

  const getYouTubeThumbnailUrl = (key: string, quality: string = 'hqdefault') =>
    `https://img.youtube.com/vi/${key}/${quality}.jpg`;

  const getYouTubeVideoUrl = (key: string) =>
    `https://www.youtube.com/watch?v=${key}`;

  return (
    <div className='movie-details-page-container'>
      <div
        className='movie-datails-information-container'
        style={
          {
            '--background-image-url': `url(${`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`})`,
          } as React.CSSProperties
        }>
        <img
          className='movie-details-poster'
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='movie-details-informations'>
          <div className='movie-details-information-section'>
            <div className='movie-detail-title'>
              <div className='title'>{movie.title}</div>
              <div className='original-title'>
                Título original: ({movie.original_title})
              </div>
              <div className='tagline'>{movie.tagline}</div>
            </div>

            <div className='movie-detail-statistics'>
              <div className='statistics'>
                <div className='statistics-name'>Popularidade</div>
                <div className='statistics-info'>{movie.popularity}</div>
              </div>
              <div className='statistics'>
                <div className='statistics-name'>Votos</div>
                <div className='statistics-info'>{movie.vote_count}</div>
              </div>
              <div className='statistics-chart'>
                <CircularProgressBar
                  progress={Number((movie.vote_average * 10).toFixed(0))}
                />
              </div>
            </div>
          </div>

          <div className='movie-details-information-section'>
            <div className='movie-detail-overview'>
              <div className='statistics'>
                <div className='statistics-name'>Sinopse</div>
                <div className='statistics-info-overview'>{movie.overview}</div>
              </div>
              <div className='statistics'>
                <div className='statistics-name'>Gêneros</div>
                <div className='statistics-tag'>
                  {movie.genres.map((genre) => {
                    return (
                      <div className='tag' key={genre.id}>
                        {genre.name}{' '}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='movie-detail-technical-information'>
              <div className='movie-detail-statistics'>
                <div className='statistics'>
                  <div className='statistics-name'>Lançamento</div>
                  <div className='statistics-info'>
                    {new Date(movie.release_date).toLocaleDateString()}
                  </div>
                </div>
                <div className='statistics'>
                  <div className='statistics-name'>Duração</div>
                  <div className='statistics-info'>{movie.runtime} minutos</div>
                </div>
              </div>
              <div className='movie-detail-statistics'>
                <div className='statistics'>
                  <div className='statistics-name'>Situação</div>
                  <div className='statistics-info'>{movie.status}</div>
                </div>
                <div className='statistics'>
                  <div className='statistics-name'>Idioma</div>
                  <div className='statistics-info'>
                    {getFullLanguageName(movie.original_language)}
                  </div>
                </div>
              </div>
              <div className='movie-detail-statistics'>
                <div className='statistics'>
                  <div className='statistics-name'>Orçamento</div>
                  <div className='statistics-info'>
                    {formatCurrency(movie.budget)}
                  </div>
                </div>
                <div className='statistics'>
                  <div className='statistics-name'>Receita</div>
                  <div className='statistics-info'>
                    {formatCurrency(movie.revenue)}
                  </div>
                </div>
                <div className='statistics'>
                  <div className='statistics-name'>Lucro</div>
                  <div className='statistics-info'>
                    {formatCurrency(movie.revenue - movie.budget)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='movie-datails-trailer-container'>
        <div className='movie-trailer-title'>Trailer</div>
        <div className='movie-trailer-info'>
          {trailers.length > 0 ? (
            <div className='trailer-section'>
              <div>
                {trailers.map((trailer) => (
                  <div key={trailer.key} className='trailer-item'>
                    <a
                      href={getYouTubeVideoUrl(trailer.key)}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <img
                        src={getYouTubeThumbnailUrl(trailer.key, 'mqdefault')} // Use 'mqdefault' ou 'hqdefault'
                        alt={`Thumbnail for ${trailer.name}`}
                      />
                      <p>{trailer.name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>Nenhum trailer foi encontrado para esse filme.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
