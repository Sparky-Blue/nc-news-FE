import React, { Component } from "react";
import Article from "./Article";

class ArticleFeed extends Component {
  state = {
    openArticle: false
  };

  toggleArticleView() {
    this.setState({
      openArticle: !this.state.openArticle
    });
  }

  render() {
    return (
      <div>
        Article Feed
        <div>
          {this.props.articles.map((article, i) => {
            const {
              body,
              comments,
              topic,
              created_by: author,
              title,
              votes
            } = article;
            return (
              <li key={i}>
                <h4 onClick={this.toggleArticleView}>{title}</h4>
                <h5>{topic}</h5>
                <h6>Votes: {votes}</h6>
                <h6>Comments: {comments}</h6>
                <h5>Author: {author}</h5>
                {this.state.openArticle && <Article article={article} />}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ArticleFeed;
