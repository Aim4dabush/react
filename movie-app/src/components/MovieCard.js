import React, { useEffect, useState } from "react";

//Components
import Modal from "./Modal";

//Utilities
import * as getMovie from "../utils";

function MovieCard({ type, poster, title, movieId }) {
  const [id, setId] = useState(movieId);
  const [movie, setMovie] = useState({});
  const [gotMovieDetails, setGotMovieDetails] = useState(false);
  const handleMovieID = () => {
    setGotMovieDetails((prev) => (prev === false ? true : false));
    setId(movieId);
  };

  useEffect(() => {
    getMovie.getMovieDetailsById(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6 mt-3">
        <div className="card">
          <img src={poster} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <span className="badge bg-danger">{type}</span>
            </p>
            <button className="btn btn-success" onClick={handleMovieID}>
              Click for details
            </button>
          </div>
        </div>
      </div>
      <div className="col-6 mt-3">
        {gotMovieDetails && (
          <Modal
            movieDetails={movie}
            foundMovie={gotMovieDetails}
            close={handleMovieID}
          />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
