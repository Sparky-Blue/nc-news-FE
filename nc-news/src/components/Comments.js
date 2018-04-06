import React, { Component } from "react";

import Voter from "./Voter";

class Comments extends Component {
  state = {
    newComment: ""
  };

  eventHandler = e => {
    const textInput = e.target.value;
    this.saveNewComment(textInput);
  };

  saveNewComment = input => {
    this.setState({
      newComment: input
    });
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="comments">
        <div className="input" id="addComment">
          Add comment:
          <input
            type="text"
            onChange={this.eventHandler}
            value={this.state.newComment}
          />
          <button onClick={() => this.props.postComment(this.state.newComment)}>
            Submit
          </button>
        </div>
        <ul>
          {comments.map((comment, i) => {
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
