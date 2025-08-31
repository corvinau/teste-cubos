import { Link } from 'react-router-dom';

import './styles.css';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

const MovieCard = ({ id, title, poster_path }: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <div
        className='movie-card'
        style={
          {
            '--background-image-url': `url(${imageUrl})`,
          } as React.CSSProperties
        }>
        <div className='movie-title'>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
