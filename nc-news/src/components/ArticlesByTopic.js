import React, { Component } from "react";
import "./ArticlesByTopic.css";
import API from "../utils/API";
import ArticlesFeed from "./ArticlesFeed";
import sortBy from "../utils/sortBy";
import Loading from "./Loading";

class ArticlesByTopic extends Component {
  state = { articles: [], topic: null, loadingData: true };

  componentDidMount() {
    this.updateArticlesByTopic();
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.match.params.topic !== prevState.topic) {
      return {
        topic: newProps.match.params.topic,
        loadingData: true
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
      articles = sortBy(articles, "votes");
      this.setState({ articles, topic, loadingData: false });
    });
  }

  render() {
    return (
      <div className="articles">
        {this.state.loadingData && (
          <Loading loadingData={this.state.loadingData} />
        )}
        <ArticlesFeed articles={this.state.articles} />>
      </div>
    );
  }
}

export default ArticlesByTopic;
