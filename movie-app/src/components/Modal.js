import React, { useState } from "react";

//Components
import MovieDetails from "./MovieDetails";

function Modal({ movieDetails, foundMovie, close }) {
  const [show, setShow] = useState(foundMovie);
  const movie = movieDetails;
  const onClose = () => {
    setShow((prev) => (prev === true ? false : true));
    close(show);
  };
  return (
    <div className="row">
      <div className="col">
        {show && (
          <MovieDetails
            poster={movie.Poster}
            title={movie.Title}
            rated={movie.Rated}
            runtime={movie.Runtime}
            genre={movie.Genre}
            plot={movie.Plot}
            actors={movie.Actors}
            rating={movie.imdbRating}
            language={movie.Language}
            director={movie.Director}
            release={movie.Released}
            close={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
