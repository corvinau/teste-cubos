import { Link } from 'react-router-dom';

import CircularProgressBar from '../CircularProgressBar';

import './styles.css';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genres: string[];
}

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  genres,
}: MovieCardProps) => {
  const votes = Number((vote_average * 10).toFixed(0));
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <div
        className='movie-card-container'
        style={
          {
            '--background-image-url': `url(${imageUrl})`,
          } as React.CSSProperties
        }>
        <div className='vote-average-container'>
          <CircularProgressBar progress={votes} />
        </div>

        <div className='movie-title-container'>
          <div className='movie-title-genres-container'>
            {genres.join(', ')}
          </div>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
