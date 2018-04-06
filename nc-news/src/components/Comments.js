import React, { Component } from "react";
import API from "../utils/API";
import Voter from "./Voter";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const articleId = this.props.articleId;
    API.getCommentsByArticle(articleId).then(({ comments }) =>
      this.setState({
        comments
      })
    );
  }

  render() {
    return (
      <div className="comments">
        <ul>
          {this.state.comments.map((comment, i) => {
            const { body, created_by, _id, votes, created_at } = comment;
            const dateCreated = new Date(created_at).toLocaleDateString(
              "en-GB",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              }
            );
            return (
              <li key={i}>
                <div className="comment">
                  <p>{body}</p>
                  <h5>comment from: {created_by.username}</h5>
                  <p>added on: {dateCreated}</p>
                  <Voter commentId={_id} votes={votes} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Comments;
