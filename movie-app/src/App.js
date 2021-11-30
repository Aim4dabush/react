import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

//Components
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
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
      });
  }, [searchTerm]);

  return (
    <div className="container">
      <MovieCard type={props.Type} poster={props.Poster} title={props.Title} />
      <MovieDetails
        poster={props.Poster}
        title={props.Title}
        rated={props.Rated}
        runtime={props.Runtime}
        genre={props.Genre}
        plot={props.Plot}
        actors={props.Actors}
        rating={props.imdbRating}
        language={props.Language}
        director={props.Director}
        release={props.Released}
      />
      {isLoading ? <Spinner /> : error}
    </div>
  );
}

getMovie
  .getMoviesBySearchTerm("million")
  .then((data) => data.Search)
  .then(async (data) => {
    return await getMovie.getMovieDetailsById(data[0].imdbID);
  })
  .then((movie) => {
    console.log(movie);
    ReactDOM.render(
      React.createElement(App, movie),
      document.getElementById("root")
    );
  });

export default App;
