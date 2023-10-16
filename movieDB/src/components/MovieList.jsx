import React, { useState, useEffect } from "react";
import axios from "axios";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const AuthStr = "Bearer ".concat(import.meta.env.VITE_MOVIE_KEY);
  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: AuthStr } })
      .then((response) => {
        console.log(response);
        setMovieList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(movieList);
  return <div>movieList</div>;
};
