import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSingleData from "./../Hook/UseSingleData";

const SingleMovie = () => {
  const { id } = useParams();
  const { data: movie, error } = useSingleData(id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (error) {
    return <h1 className="text-white p-4">Error loading movie</h1>;
  }

  if (!movie) {
    return (
      <h1 className="text-4xl text-white h-screen bg-black flex justify-center items-center">
        Loading...
      </h1>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto text-white p-3 sm:p-4 overflow-hidden">
      {/* Title and Back Button */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <h1 className="text-2xl sm:text-4xl font-bold break-words">
            {movie.original_title}
          </h1>

          {movie.tagline && (
            <p className="italic text-blue-400 text-sm">"{movie.tagline}"</p>
          )}
        </div>

        <button
          onClick={handleBack}
          className="border-2 text-white font-bold px-3 py-2 rounded hover:bg-blue-500"
        >
          ← Back
        </button>
      </div>

      {/* Movie Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
        {/* Poster */}
        <div className="w-full max-w-xs shrink-0">
          <img
            className="w-full h-auto rounded-lg object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col gap-5 w-full min-w-0">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>

            <p className="text-gray-300 leading-7 break-words">
              {movie.overview}
            </p>
          </div>

          {/* Languages */}
          <p className="break-words">
            Spoken Languages:{" "}
            {movie.spoken_languages.map((lang) => lang.english_name).join(", ")}
          </p>

          {/* Movie Info */}
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span>📅 {movie.release_date}</span>
            <span>⭐ {movie.vote_average.toFixed(1)}/10</span>
            <span>
              ⏱ {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </span>
          </div>

          {/* Genres */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Genres</h2>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-600 hover:bg-blue-600 transition"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Production Companies */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">Production Companies:</h2>

            <div className="flex flex-wrap gap-2">
              {movie.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="px-3 py-1 rounded-full text-sm bg-gray-800 break-words"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>

          {/* Production Countries */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">Production Countries:</h2>

            <div className="flex flex-wrap gap-2">
              {movie.production_countries.map((company) => (
                <span
                  key={company.iso_3166_1}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
