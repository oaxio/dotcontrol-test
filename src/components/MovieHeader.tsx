import React from 'react';
import Image from 'next/image';

// Types
import { Movie } from '../types/movie';

const MovieHeader: React.FC<{ movie: Movie }> = ({ movie }) => {

    return (
        <div className="relative shadow">
            <img style={{ height: '800px' }} className="w-full object-cover" src={movie.Poster.replace("SX300", "SX5000")} alt={movie.Title} />

            <div className="cardHeaderOverlay">
                <div className="cardOverlay container justify-center mx-auto px-8 md:px-0 break-all">
                    <Image className="absolute top-11 left-8 md:left-0 z-10" src="/logo.png" width={59} height={51} alt={''} />
                    <h3 className="font-bold text-6xl md:text-8xl mb-4">{movie.Title}</h3>
                    <p className="text-lg">{movie.Plot}</p>
                    <a
                        style={{ backgroundColor: '#FF2345' }}
                        className="mt-8 rounded-3xl px-8 py-4 text-white w-max flex font-bold"
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                    >
                        More information

                        <Image
                            src="/imdb.svg"
                            alt="My SVG"
                            width={42}
                            height={20}
                            className="ml-6"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MovieHeader;
