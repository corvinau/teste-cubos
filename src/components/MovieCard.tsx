import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

const MovieCard = ({ id, title, poster_path }: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <div className='movie-card'>
      <Link to={`/movie/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
