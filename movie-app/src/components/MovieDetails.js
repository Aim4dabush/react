import React from "react";
import PropTypes from "prop-types";

function MovieDetails(props) {
  const {
    poster,
    title,
    rated,
    runtime,
    genre,
    plot,
    actors,
    rating,
    language,
    director,
    release,
  } = props;
  return (
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <div className="row">
            <div className="col">
              <div className="card-header bg-primary">
                {title} : {rating}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4">
              <img
                src={poster}
                className="img-fluid rounded-start w-100"
                alt={title}
              />
            </div>
            <div className="col-12 col-sm-8">
              <div className="card-body">
                <div className="row">
                  <div className="col-4 mt-1">
                    <span className="badge bg-secondary">{rated}</span>
                  </div>
                  <div className="col-4 mt-1">
                    <span className="badge bg-secondary">{runtime}</span>
                  </div>
                  <div className="col-4 mt-1">
                    <span className="badge bg-secondary">{genre}</span>
                  </div>
                  <div className="col-12 mt-3">
                    <h5 className="card-title">Plot</h5>
                    <p className="card-text">{plot}</p>
                  </div>
                  <div className="col-12 col-xl-6 mt-3">
                    <h5 className="card-title">Director</h5>
                    <p className="card-text">{director}</p>
                  </div>
                  <div className="col-12 col-xl-6 mt-3">
                    <h5 className="card-title">Actors</h5>
                    <p className="card-text">{actors}</p>
                  </div>
                  <div className="col-6 mt-3">
                    <h5 className="card-title">Release</h5>
                    <p className="card-text">{release}</p>
                  </div>
                  <div className="col-6 mt-3">
                    <h5 className="card-title">Language</h5>
                    <p className="card-text">{language}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rated: PropTypes.string,
  runtime: PropTypes.string,
  genre: PropTypes.string,
  plot: PropTypes.string,
  actors: PropTypes.string,
  rating: PropTypes.string,
  language: PropTypes.string,
  director: PropTypes.string,
  release: PropTypes.string,
};

export default MovieDetails;
