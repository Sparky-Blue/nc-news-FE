import React, { Component } from "react";
import { Route } from "react-router-dom";
import ArticlesFeed from "../components/ArticlesFeed";
import API from "../utils/API";
import Article from "./Article";
import sortBy from "../utils/sortBy";
import LogIn from "../components/LogIn";

class Home extends Component {
  state = {
    articles: [],
    loading: true,
    username: "northcoders",
    newUser: "",
    usernameError: false
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

  eventHandler = e => {
    const textInput = e.target.value;
    this.saveUserInput(textInput);
  };

  saveUserInput = input => {
    this.setState({
      newUser: input.toLowerCase()
    });
  };

  authenticateUserName = username => {
    return API.getUser(username).then(user => {
      if (user.user)
        this.setState({
          username,
          newUser: "",
          usernameError: false
        });
      else
        this.setState({
          usernameError: true
        });
    });
  };

  signout = () => {
    this.setState({
      username: null
    });
  };

  render() {
    const { articles, loading, username, newUser, usernameError } = this.state;
    const { url } = this.props.match;
    return (
      <div className="home">
        <LogIn
          newUser={newUser}
          usernameError={usernameError}
          eventHandler={this.eventHandler}
          signout={this.signout}
          username={username}
          authenticateUserName={this.authenticateUserName}
        />
        <Route
          exact
          path={url}
          render={props => {
            return (
              <ArticlesFeed {...props} articles={articles} loading={loading} />
            );
          }}
        />
        <Route
          path={`${url}articles/:article_id`}
          render={props => {
            return <Article {...props} username={username} />;
          }}
        />
      </div>
    );
  }
}

export default Home;
