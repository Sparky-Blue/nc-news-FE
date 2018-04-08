import React, { Component } from "react";
//import "./ArticlesByTopic.css";
import API from "../utils/API";
import ArticlesFeed from "../components/ArticlesFeed";
import sortBy from "../utils/sortBy";
import Loading from "../components/Loading";

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
      const articlesList = sortBy(articles, "votes");
      this.setState({ articles: articlesList, topic, loadingData: false });
    });
  }

  render() {
    return (
      <div className="articles">
        {this.state.loadingData && (
          <Loading loadingData={this.state.loadingData} />
        )}
        <ArticlesFeed articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticlesByTopic;
