import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input";
import ArticleDisplay from "./ArticleDisplay";
import "./Search.css";

class Search extends Component {
  KEYS_TO_FILTERS = ["title", "body", "created_by"];
  state = {
    searchTerm: "",
    filteredArticles: []
  };

  searchUpdated = term => {
    this.props.changeSearchStatus(term);
    this.setState({ searchTerm: term });
    this.filterArticles();
  };

  filterArticles = () => {
    const filteredArticles = this.props.articles.filter(
      createFilter(this.state.searchTerm, this.KEYS_TO_FILTERS)
    );
    this.setState({
      filteredArticles
    });
  };

  render() {
    return (
      <div className="search">
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {!this.state.filteredArticles.length &&
          this.state.searchTerm && <p>No results</p>}
        <ArticleDisplay articles={this.state.filteredArticles} />
      </div>
    );
  }
}

export default Search;
