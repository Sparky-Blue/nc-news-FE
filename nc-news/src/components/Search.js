import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <label>
        <i className="fas fa-search" />
        <input type="text" name="Search" id="search" />
      </label>
    );
  }
}

export default Search;
