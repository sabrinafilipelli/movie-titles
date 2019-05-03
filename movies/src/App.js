import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1"
      )
      .then(response => {
        this.setState(() => ({ movies: response.data.data }));
        console.log(response.data.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        <div className="list">
          {this.state.movies.map(movie => (
            <p>{movie.Title}</p>
          ))}
        </div>
        <button className="main-btn">View on Github</button>
      </div>
    );
  }
}

export default App;
