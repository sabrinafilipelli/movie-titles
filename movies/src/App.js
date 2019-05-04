import React, { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  return (
    <div className="App">
      <div className="a">
        <h1>Movie Titles II</h1>
        <h3>A Reimagined Algorithm Test</h3>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const searched = await axios.get(
              `https://jsonmock.hackerrank.com/api/movies/search/?Title=${search}&page=1`
            );
            setSearchedMovies(searched.data.data);
            setSearch("");
          }}
        >
          <input
            className="search"
            type="text"
            placeholder="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input className="main-btn" type="submit" value="magic" />
        </form>
        <ul className="list">
          {searchedMovies.map(movie => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      </div>
      <footer>
        <a href="https://github.com/sabrinagear/movie-titles" className="code">
          Check out the code on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
