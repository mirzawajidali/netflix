import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../config/axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h1 className="title">{title}</h1>
        <div className="row_posters">
          {movies.map((movie) => {
            return (
              <img
                className="poster"
                src={`${base_url}${movie.poster_path}`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
