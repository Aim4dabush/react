import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";

//Components
import MovieList from "./components/MovieList";
import Spinner from "./components/other_components/Spinner";

//Utilities
import * as getMovie from "./utils";

function App(props) {
  const [searchTerm, setSearchTerm] = useState("thunder");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovie
      .getMoviesBySearchTerm(searchTerm)
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
  }, [searchTerm]);

  return (
    <div className="container">
      {isLoading ? <Spinner /> : <MovieList movieArr={movies} />}
    </div>
  );
}

export default App;
