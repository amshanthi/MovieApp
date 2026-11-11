import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSingleData from "./../Hook/UseSingleData";

const SingleMovie = () => {
  const API_KEY = "e35dc3019241f69f7967a12499d8487f";
  const { id } = useParams();
  const { data: movie, error } = useSingleData(id);
  console.log(movie);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  if (error) {
    return <h1>Error loading movie</h1>;
  }

  if (!movie) {
    return (
      <h1 className="text-4xl text-white h-screen bg-black flex justify-center items-center">
        Loading...
      </h1>
    );
  }
  return (
    <div className="text-white  p-2 ">
      <div className="m-2 flex justify-between">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="text-4xl font-bold">{movie.original_title}</h1>
          {movie.tagline && (
            <p className="italic text-blue-400 text-sm">"{movie.tagline}"</p>
          )}
        </div>

        <div>
          <button
            onClick={handleBack}
            className=" w-bg-blue-500 border-2  text-white font-bold p-1 rounded "
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-center flex-col p-4 lg:flex-row lg:items-start">
        <div>
          <img
            className="w-80 rounded-lg object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
        <div className="flex flex-col flex-1 space-y-4">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300 leading-7 max-w-5xl">
              {movie.overview}
            </p>
          </div>
          <p>
            Spoken Languages:{" "}
            {movie.spoken_languages.map((lang) => lang.english_name).join(", ")}
          </p>{" "}
          <div className="flex  gap-6 text-gray-400 mt-2">
            <span>📅 {movie.release_date}</span>
            <span>⭐ {movie.vote_average.toFixed(1)}/10</span>
            <span>
              ⏱ {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </span>
          </div>
          {/* Genres */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Genres</h2>

            <div className="flex flex-row flex-wrap gap-3">
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
          <p className="flex flex-col gap-4">
            Production Companies:{" "}
            <div className="flex  gap-2">
              {movie.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="px-3 py-1 rounded-full text-sm bg-gray-800"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </p>
          <p className="flex flex-col gap-4">
            Production Countries:{" "}
            <div className="flex flex-wrap gap-2">
              {movie.production_countries.map((company) => (
                <span
                  key={company.id}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
