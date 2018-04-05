import React, { Component } from "react";
import ArticlesFeed from "./ArticlesFeed";
import TopicsMenu from "./TopicsMenu";
import API from "../utils/API";

class Home extends Component {
  state = { articles: [] };

  componentDidMount() {
    API.getArticles().then(({ articles }) =>
      this.setState({
        articles
      })
    );
  }

  render() {
    return (
      <div>
        <ArticlesFeed articles={this.state.articles} />
        <TopicsMenu />
      </div>
    );
  }
}

export default Home;
