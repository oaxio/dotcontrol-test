import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Components
import MovieCard from './MovieCard';
import MovieHeader from './MovieHeader';

// Types
import { Movie } from '../types/movie';

const MovieOverview: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchMovies = async (page: number) => {
    try {
      const response = await fetch(`/api/movies?page=${page}`);
      const data = await response.json();

      if (data.error) {
        console.error('Error fetching movies:', data.error);
      } else {
        setMovies(prevMovies => (page === 1 ? data.results : [...prevMovies, ...data.results]));
        setCurrentPage(page);
        if (page === 1 && data.results.length > 0) {
          // Show the details of the first movie on load
          setSelectedMovie(data.results[0]);
          fetchSpecificMovie(data.results[0].imdbID)
        }
      }
    } catch (error) {
      console.error('Error fetching or parsing movies:', error);
    }
  };

  const fetchSpecificMovie = async (id: string) => {
    try {
      const response = await fetch(`/api/movie?id=${id}`);
      const data = await response.json();


      if (data.error) {
        console.error('Error fetching movies:', data.error);
      } else {
        setSelectedMovie(data.results)
      }
    } catch (error) {
      console.error('Error fetching or parsing movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, []);

  const loadMore = () => {
    fetchMovies(currentPage + 1);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    fetchSpecificMovie(movie.imdbID);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {selectedMovie && (
        <MovieHeader movie={selectedMovie} />
      )}

      <div className="grid md:grid-cols-3 gap-8 container mx-auto -mt-16 px-8 md:px-0">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => handleMovieClick(movie)} />
        ))}
      </div>
      
      <div className="container mx-auto my-20">
        <button 
          className="rounded-3xl mx-auto border-white/[0.2] border-2 px-8 py-4 text-white w-max flex items-center justify-center font-bold" 
          onClick={loadMore}
        >
          <Image
                src="/load.png"
                alt="My SVG"
                width={28}
                height={28}
                className="mr-6"
            />
          Load More
        </button>
      </div>
    </div>
  );
};

export default MovieOverview;
