import React, { Component } from "react";
import Loading from "./Loading";
import ArticleDisplay from "./ArticleDisplay";
import Search from "./Search";

class ArticleFeed extends Component {
  state = {
    searchActive: false
  };

  changeSearchStatus = searchTerm => {
    let searchActive = false;
    if (searchTerm.length > 0) searchActive = true;
  };

  render() {
    const { loading, articles } = this.props;
    return (
      <div>
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
