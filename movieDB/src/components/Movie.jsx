import React from "react";

const Movie = ({ results, key, imageUrl }) => {
  console.log(results);
  return (
    <div
      className="h-max shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
      key={key}
    >
      <div className="">
        <img
          className="rounded-xl  w-full object-cover"
          alt={results.title}
          src={`${imageUrl}${results.poster_path}`}
        />
      </div>
      <div className="mb-2 p-6 text-left">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
          {results.title}
        </h2>
        <p className="leading-5 text-gray-500 dark:text-gray-400 text-left">
          {results.overview}
        </p>
        <p className="m-2 pt-2">
          {results.vote_average}/10 ratings (based on {results.vote_count}{" "}
          votes)
        </p>
      </div>
    </div>
  );
};

export default Movie;
