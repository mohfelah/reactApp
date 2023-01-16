import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { movieData } from "./components/Data";


function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterName, setFilterName] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  return (

    <div className="App">
      <div className="header">
        <Filter
          setFilterName={setFilterName}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
        />
      </div>


      <div>
      <MovieList
        movies={movies}
        setMovies={setMovies}
        filterName={filterName}
        filterRating={filterRating}
      />
      </div>


    </div>

  );
}

export default App;
