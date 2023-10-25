import React from "react";

const Movie = ({ results, imageUrl }) => {
  console.log(results);
  return (
    <div className="h-min shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-1">
      <div className="">
        <img
          className="rounded-xl w-full object-cover"
          alt={results.title}
          src={`${imageUrl}${results.poster_path}`}
        />
      </div>
      <div className="mb-2 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
          {results.title}
        </h2>
        <p className="text-left leading-5 text-gray-500 dark:text-gray-400">
          {results.overview}
        </p>
        <p className="text-left mt-2 pt-2 text-gray-600 dark:text-gray-400">
          {results.vote_average}/10 ratings (based on {results.vote_count}{" "}
          votes)
        </p>
      </div>
    </div>
  );
};

export default Movie;
