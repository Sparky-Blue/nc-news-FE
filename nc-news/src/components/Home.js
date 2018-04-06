import React, { Component } from "react";
import ArticlesFeed from "./ArticlesFeed";
import API from "../utils/API";

class Home extends Component {
  render() {
    return (
      <div>
        <ArticlesFeed articles={this.props.articles} />
      </div>
    );
  }
}

export default Home;
