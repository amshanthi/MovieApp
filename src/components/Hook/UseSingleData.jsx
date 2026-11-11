import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useSingleData = (id) => {
  console.log(id + " id");
  const API_KEY = "e35dc3019241f69f7967a12499d8487f";
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
        );

        console.log(response.status);

        const result = await response.json();
        console.log(result);

        setData(result);
      } catch (e) {
        setError(e);
      }
    }

    fetchData();
  }, [id]);
  return { data, error };
};

export default useSingleData;
