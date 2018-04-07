import React, { Component } from "react";
import "./ArticlesByTopic.css";
import API from "../utils/API";
import ArticlesFeed from "./ArticlesFeed";
import sortArticlesByVotes from "../utils/sortArticlesByVotes";

class ArticlesByTopic extends Component {
  state = { articles: [], topic: null };

  componentDidMount() {
    this.updateArticlesByTopic();
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.match.params.topic !== prevState.topic) {
      return {
        topic: newProps.match.params.topic
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.props.match.params.topic) {
      this.updateArticlesByTopic();
    }
  }

  updateArticlesByTopic() {
    const topic = this.props.match.params.topic;
    API.getArticlesByTopic(topic).then(({ articles }) => {
      articles = sortArticlesByVotes(articles);
      this.setState({ articles, topic });
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
