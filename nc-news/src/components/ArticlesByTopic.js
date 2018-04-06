import React, { Component } from "react";
import "./ArticlesByTopic.css";
import API from "../utils/API";
import ArticlesFeed from "./ArticlesFeed";
import sortArticlesByVotes from "../utils/sortArticlesByVotes";

class ArticlesByTopic extends Component {
  state = { articles: [] };

  componentDidMount() {
    const topic = this.props.match.params.topic;
    API.getArticlesByTopic(topic).then(({ articles }) => {
      articles = sortArticlesByVotes(articles);
      this.setState({
        articles
      });
    });
  }

  render() {
    return (
      <div className="articles">
        <ArticlesFeed articles={this.state.articles} />>
      </div>
    );
  }
}

export default ArticlesByTopic;
