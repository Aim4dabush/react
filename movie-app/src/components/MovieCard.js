import React from "react";

function MovieCard({ type, poster, title }) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6 mt-3">
        <div className="card">
          <img src={poster} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
