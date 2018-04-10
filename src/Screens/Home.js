import React, { Component } from "react";
import ArticlesFeed from "../components/ArticlesFeed";
import API from "../utils/API";
import sortBy from "../utils/sortBy";

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
        <ArticlesFeed
          articles={this.state.articles}
          loading={this.state.loading}
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

export default Home;
