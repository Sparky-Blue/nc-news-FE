import React, { Component } from "react";
import Loading from "./Loading";
import PT from "prop-types";
import ArticleDisplay from "./ArticleDisplay";

class ArticleFeed extends Component {
  render() {
    return (
      <div>
        {this.props.loading && <Loading loading={this.props.loading} />}
        <ArticleDisplay articles={this.props.articles} />
      </div>
    );
  }

  static propTypes = {
    articles: PT.array.isRequired,
    loading: PT.bool
  };
}

export default ArticleFeed;
