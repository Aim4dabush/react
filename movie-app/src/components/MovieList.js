import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieArr }) {
  const movies = movieArr;

  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <>
              <MovieCard
                key={movie.imbdID}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
              />
            </>
          );
        })}
    </>
  );
}

export default MovieList;
