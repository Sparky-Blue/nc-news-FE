import React, { Component } from "react";
import Article from "./Article";
import Voter from "./Voter";
import produce from "immer";

class ArticleFeed extends Component {
  state = {
    openArticle: false
  };

  toggleArticleView = () => {
    this.setState({
      openArticle: !this.state.openArticle
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.articles.map((article, i) => {
            const {
              body,
              comments,
              topic,
              created_by: author,
              title,
              votes,
              _id
            } = article;
            return (
              <li key={i}>
                <h4 onClick={this.toggleArticleView}>{title}</h4>
                <h5>{topic}</h5>
                <Voter articleId={_id} votes={votes} />
                <h6>Comments: {comments}</h6>
                <h5>Author: {author}</h5>
                {this.state.openArticle && <Article article={article} />}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleFeed;
