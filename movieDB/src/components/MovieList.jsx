import React, { useState, useEffect } from "react";
import { movieApiOptions, MOVIE_API_IMAGES_URL } from "../movieApiOptions";
import Movie from "./Movie";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);
  const movieRequest = fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    movieApiOptions
  ).then((response) => response.json());

  const genreRequest = fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    movieApiOptions
  ).then((response) => response.json());

  useEffect(() => {
    Promise.all([movieRequest, genreRequest])
      .then(([movieRequest, genreRequest]) => {
        setMovieList(movieRequest);
        setGenres(genreRequest);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(movieList, "results");
  return (
    <div className="container grid gap-4 grid-cols-4 grid-rows-4">
      {movieList.results != null
        ? movieList.results.map((results, index) => (
            <Movie
              results={results}
              key={index}
              imageUrl={MOVIE_API_IMAGES_URL}
            />
          ))
        : "No movies to show"}
    </div>
  );
};
