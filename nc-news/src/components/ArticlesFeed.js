import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import PT from "prop-types";
import Voter from "./Voter";

class ArticleFeed extends Component {
  state = {
    openArticle: false
  };

  render() {
    return (
      <div>
        {this.props.loading && <Loading loading={this.props.loading} />}
        <ul>
          {this.props.articles.map((article, i) => {
            const { comments, topic, created_by, title, votes, _id } = article;
            return (
              <li key={i}>
                <h4>
                  <Link to={`/articles/${_id}`}>{title}</Link>
                </h4>
                <h5>{topic}</h5>
                <Voter articleId={_id} votes={votes} />
                <h6>Comments: {comments}</h6>
                <h5>
                  Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  static propTypes = {
    articles: PT.array.isRequired,
    loading: PT.bool.isRequired
  };
}

export default ArticleFeed;
