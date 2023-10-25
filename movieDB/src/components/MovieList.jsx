import React, { useState, useEffect } from "react";
import axios from "axios";
import { movieApiOptions, MOVIE_API_IMAGES_URL } from "../movieApiOptions";
import Movie from "./Movie";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      movieApiOptions
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(movieList.results, "movieList");
  return (
    <div className="flex flex-row">
      {movieList.results &&
        movieList.results.map((results, key) => (
          <Movie
            results={results}
            index={key}
            imageUrl={MOVIE_API_IMAGES_URL}
          />
        ))}
    </div>
  );
};
MOVIE_API_IMAGES_URL;
