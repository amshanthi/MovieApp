import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import SingleMovie from "../MovieList/SingleMovie";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const AllRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" icon={Fire} />}
      />
      <Route
        path="/top-rated"
        element={<MovieList type="top_rated" title="Top Rated" icon={Star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" icon={Party} />}
      />
      <Route path="/movie/:id" element={<SingleMovie />} />

      <Route
        path="*"
        element={
          <h1 className="text-center text-4xl mt-20 h-screen">404 Not Found</h1>
        }
      />
    </Routes>
  );
};

export default AllRouter;
