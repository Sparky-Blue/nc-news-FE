import React, { Component } from "react";
import ArticlesFeed from "./ArticlesFeed";

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
