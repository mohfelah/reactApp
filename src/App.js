import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { movieData } from "./components/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterName, setFilterName] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Filter
            setFilterName={setFilterName}
            filterRating={filterRating}
            setFilterRating={setFilterRating}
          />
        </div>
        
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                setMovies={setMovies}
                filterName={filterName}
                filterRating={filterRating}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
