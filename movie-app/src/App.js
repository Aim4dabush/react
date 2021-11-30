import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef, useState } from "react";

//Components
import MovieList from "./components/MovieList";
import Spinner from "./components/other_components/Spinner";

//Utilities
import * as getMovie from "./utils";

function App(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const inputValue = useRef(null);

  const handleSearch = () => {
    setSearchTerm(inputValue.current.value);
    setIsLoading(true);
  };

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev >= 1 ? prev - 1 : page));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev <= 4 ? prev + 1 : page));
  };

  useEffect(() => {
    getMovie
      .getMoviesBySearchTerm(searchTerm, page)
      .then((data) => {
        setMovies(data.Search);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setMovies([]);
        setIsLoading(false);
        alert(error);
      });
  }, [searchTerm, page, error]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group d-flex justify-content-center mt-3">
            <input
              type="text"
              className="form-contorl"
              placeholder="Enter keyword for movie search..."
              ref={inputValue}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <div className="btn-group" role="group">
            {movies && (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handlePrevPage}
                >
                  prev
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={1}
                  onClick={handlePageChange}
                >
                  1
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={2}
                  onClick={handlePageChange}
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={3}
                  onClick={handlePageChange}
                >
                  3
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={4}
                  onClick={handlePageChange}
                >
                  4
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={5}
                  onClick={handlePageChange}
                >
                  5
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleNextPage}
                >
                  next
                </button>
              </>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {isLoading ? <Spinner /> : <MovieList movieArr={movies} />}
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <div className="btn-group" role="group">
            {movies && (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handlePrevPage}
                >
                  prev
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={1}
                  onClick={handlePageChange}
                >
                  1
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={2}
                  onClick={handlePageChange}
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={3}
                  onClick={handlePageChange}
                >
                  3
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={4}
                  onClick={handlePageChange}
                >
                  4
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  value={5}
                  onClick={handlePageChange}
                >
                  5
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleNextPage}
                >
                  next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
