import React, { Component } from "react";
import { Route } from "react-router-dom";
import ArticlesFeed from "../components/ArticlesFeed";

class Home extends Component {
  render() {
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
        <ArticlesFeed articles={articles} loading={loading} />
      </div>
    );
  }
}

export default Home;
