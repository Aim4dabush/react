import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import React from "react";

//Components
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

//Utilities
import * as getMovie from "./utils";

function App(props) {
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
