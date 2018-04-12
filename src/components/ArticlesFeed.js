import React, { Component } from "react";
import Loading from "./Loading";
import ArticleDisplay from "./ArticleDisplay";
import Search from "./Search";
import LogIn from "../components/LogIn";
import API from "../utils/API";
import sortBy from "../utils/sortBy";
import PropTypes from "prop-types";

class ArticleFeed extends Component {
  state = {
    searchActive: false,
    articles: [],
    loading: true
  };

  static propTypes = {
    newUser: PropTypes.string.isRequired,
    usernameError: PropTypes.bool.isRequired,
    eventHandler: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired,
    username: PropTypes.string,
    authenticateUserName: PropTypes.func.isRequired
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

  changeSearchStatus = searchTerm => {
    let searchActive = false;
    if (searchTerm.length > 0) searchActive = true;
    this.setState({
      searchActive
    });
  };

  render() {
    const { loading, articles } = this.state;
    const {
      newUser,
      usernameError,
      eventHandler,
      signout,
      username,
      authenticateUserName
    } = this.props;
    return (
      <div>
        <LogIn
          newUser={newUser}
          usernameError={usernameError}
          eventHandler={eventHandler}
          signout={signout}
          username={username}
          authenticateUserName={authenticateUserName}
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
