import React, { Component } from "react";
import Loading from "./Loading";
import ArticleDisplay from "./ArticleDisplay";
import Search from "./Search";
import LogIn from "../components/LogIn";

class ArticleFeed extends Component {
  state = {
    searchActive: false
  };

  changeSearchStatus = searchTerm => {
    let searchActive = false;
    if (searchTerm.length > 0) searchActive = true;
    this.setState({
      searchActive
    });
  };

  render() {
    const { loading, articles } = this.props;
    return (
      <div>
        <LogIn
          newUser={this.props.newUser}
          usernameError={this.props.usernameError}
          eventHandler={this.props.eventHandler}
          signout={this.props.signout}
          username={this.props.username}
          authenticateUserName={this.props.authenticateUserName}
        />
        {loading && <Loading loading={loading} />}
        <Search
          articles={articles}
          changeSearchStatus={this.changeSearchStatus}
        />
        {!this.state.searchActive && <ArticleDisplay articles={articles} />}
      </div>
    );
  }
}

export default ArticleFeed;
