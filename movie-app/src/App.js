import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import React from "react";

//Components
import MovieCard from "./components/MovieCard";

//Utilities
import * as getMovie from "./utils";

function App(props) {
  return (
    <div className="container">
      <MovieCard type={props.Type} poster={props.Poster} title={props.Title} />
    </div>
  );
}

getMovie
  .getMoviesBySearchTerm("million")
  .then((data) => data.Search)
  .then(async (data) => {
    console.log(data);
    return await getMovie.getMovieDetailsById(data[0].imdbID);
  })
  .then((movie) => {
    ReactDOM.render(
      React.createElement(App, movie),
      document.getElementById("root")
    );
  });

export default App;
