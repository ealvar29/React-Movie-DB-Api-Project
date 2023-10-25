import React from "react";

const Movie = ({ results, index, imageUrl }) => {
  return (
    <div className="" key={index}>
      <img alt={results.title} src={`${imageUrl}${results.poster_path}`} />
      <label className="text-2xl font-bold underline">{results.title}</label>
      <p>{results.overview}</p>
    </div>
  );
};

export default Movie;
