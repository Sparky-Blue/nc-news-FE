import React, { Component } from "react";
import PT from "prop-types";
import ArticlesFeed from "./ArticlesFeed";

class Home extends Component {
  render() {
    return (
      <div>
        <ArticlesFeed
          articles={this.props.articles}
          loading={this.props.loading}
        />
      </div>
    );
  }

  static propTypes = {
    articles: PT.array.isRequired
  };
}

export default Home;
