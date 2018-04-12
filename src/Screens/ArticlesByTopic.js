import React, { Component } from "react";
import PropTypes from "prop-types";
import API from "../utils/API";
import ArticlesFeed from "../components/ArticlesFeed";
import sortBy from "../utils/sortBy";
import Loading from "../components/Loading";
import PageNotFound from "../components/PageNotFound";

class ArticlesByTopic extends Component {
  state = { articles: [], topic: null, loadingData: true, error: false };

  static propTypes = {
    newUser: PropTypes.string.isRequired,
    usernameError: PropTypes.bool.isRequired,
    eventHandler: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired,
    username: PropTypes.string,
    authenticateUserName: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.updateArticlesByTopic();
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.match.params.topic !== prevState.topic) {
      return {
        topic: newProps.match.params.topic,
        loadingData: true,
        error: false
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
      if (!articles) this.setState({ loadingData: false, error: true });
      else {
        const articlesList = sortBy(articles, "votes");
        this.setState({ articles: articlesList, topic, loadingData: false });
      }
    });
  }

  render() {
    return (
      <div className="articles">
        {this.state.loadingData && (
          <Loading loadingData={this.state.loadingData} />
        )}
        {this.state.error && <PageNotFound />}
        <ArticlesFeed
          articles={this.state.articles}
          newUser={this.props.newUser}
          usernameError={this.props.usernameError}
          eventHandler={this.props.eventHandler}
          signout={this.props.signout}
          username={this.props.username}
          authenticateUserName={this.props.authenticateUserName}
        />
      </div>
    );
  }
}

export default ArticlesByTopic;
