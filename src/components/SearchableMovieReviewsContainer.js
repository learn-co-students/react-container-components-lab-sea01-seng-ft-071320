import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: " ",
  };

  componentDidMount() {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type="text" name="search" />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default SearchableMovieReviewsContainer;
