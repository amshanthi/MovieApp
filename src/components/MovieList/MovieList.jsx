import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import _ from "lodash";

const MovieList = ({ type, title, icon }) => {
  const API_KEY = "e35dc3019241f69f7967a12499d8487f";
  const [movies, setMovies] = useState([]);
  const [minRate, setMinRate] = useState(8);
  const [sortBy, setSortBy] = useState({
    by: "default",
    order: "asc",
  });
  const [selectedFilter, setSelectedFilter] = useState([]);
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`,
    );
    const data = await response.json();
    setMovies(data.results);
    setSelectedFilter(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sortBy.by !== "default") {
      const sortedMovies = _.orderBy(
        selectedFilter,
        [sortBy.by],
        [sortBy.order],
      );
      setSelectedFilter(sortedMovies);
    } else {
      setSelectedFilter(selectedFilter);
    }
  }, [sortBy]);

  const handleFilterChange = (rate) => {
    setMinRate(rate);
    if (rate === minRate) {
      setMinRate(0);
      setSelectedFilter(movies);
      return;
    }
    const filteredMovies = movies.filter(
      (movie) => Math.floor(movie.vote_average) === rate,
    );
    setSelectedFilter(filteredMovies);
  };

  const handleSortByChange = (e) => {
    const { name, value } = e.target;
    setSortBy((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className=" mx-auto py-4 " id={type}>
      <header className="  flex justify-between md:items-center p-2 m-2 md:flex-row flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#ffe400] flex items-center gap-1">
          {title}
          <img
            className="inline-block w-6 h-6 ml-2"
            src={icon}
            alt={`${title} Icon`}
          />
        </h2>
        <div className="flex justify-between items-center gap-4 ">
          <Filter
            handleFilterChange={handleFilterChange}
            filterArr={[8, 7, 6]}
            minRate={minRate}
          />
          <select
            onChange={handleSortByChange}
            name="by"
            id=""
            className="border-2 border-gray-300 focus:outline-none bg-gray-800 text-white  p-1"
          >
            <option value="default">Sort by</option>
            <option value="vote_average">Rating</option>
            <option value="release_date">Date</option>
          </select>

          <select
            onChange={handleSortByChange}
            name="order"
            id=""
            className="border-2 border-gray-300 focus:outline-none bg-gray-800 text-white p-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 ">
        {selectedFilter.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
