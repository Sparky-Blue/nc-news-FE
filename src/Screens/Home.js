import React, { Component } from "react";
import ArticlesFeed from "../components/ArticlesFeed";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <ArticlesFeed
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
