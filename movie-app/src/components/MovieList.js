import React from "react";

//Components
import MovieCard from "./MovieCard";

function MovieList({ movieArr }) {
  const movies = movieArr;

  return (
    <div className="col">
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <MovieCard
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                movieId={movie.imdbID}
              />
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
