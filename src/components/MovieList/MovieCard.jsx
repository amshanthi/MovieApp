import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../../assets/glowing-star.png";

const MovieCard = ({ movie }) => {
  const API_KEY = "e35dc3019241f69f7967a12499d8487f";
  return (
    <Link
      className="relative block h-400px w-300px overflow-hidden rounded-xl group "
      to={`/movie/${movie.id}`}
    >
      <img
        className="w-full h-420px object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=${API_KEY}`}
        alt={movie.title}
        alt="Movie Poster"
      />

      <div
        className="absolute top-0 bottom-0  
          bg-gradient-to-t from-black/80 via-black/50 to-transparent
          p-4
          opacity-0
          hover:opacity-100
          transition duration-300 
          flex flex-col justify-end
        "
      >
        <h3 className="text-white text-2xl font-bold mb-2">
          {movie.original_title}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-300 "> {movie.release_date}</p>
          <p className="flex items-center gap-1 text-yellow-400 font-semibold">
            {movie.vote_average.toFixed(1)}
            <img className="w-4 h-4" src={StarIcon} alt="Star Icon" />
          </p>
        </div>
        <p className="text-gray-200 text-sm leading-6">
          {movie.overview.length > 100
            ? movie.overview.substring(0, 100) + "..."
            : movie.overview}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
