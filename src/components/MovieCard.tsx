import React from 'react';

interface MovieCardProps {
  movie: {
    Poster: string;
    Title: string;
  };
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div className="relative cursor-pointer break-all" onClick={onClick}>
      <img className="w-full" src={movie.Poster} alt={movie.Title} />

      <div className="cardOverlay justify-end shadow">
        <h3 className="ml-8 text-xl font-semibold">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
