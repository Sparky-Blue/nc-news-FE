import React, { Component } from "react";
import { Route } from "react-router-dom";
import ArticlesFeed from "../components/ArticlesFeed";
import API from "../utils/API";
import sortBy from "../utils/sortBy";
import LogIn from "../components/LogIn";

class Home extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    this.updateArticles();
  }

  updateArticles = () => {
    API.getArticles().then(({ articles }) => {
      const articlesList = sortBy(articles, "votes");
      this.setState({ articles: articlesList, loading: false });
    });
  };

  render() {
    return (
      <div className="home">
        <LogIn
          newUser={this.props.newUser}
          usernameError={this.props.usernameError}
          eventHandler={this.props.eventHandler}
          signout={this.props.signout}
          username={this.props.username}
          authenticateUserName={this.props.authenticateUserName}
        />
        <ArticlesFeed
          articles={this.state.articles}
          loading={this.state.loadingloading}
        />
      </div>
    );
  }
}

export default Home;
