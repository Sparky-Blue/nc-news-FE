import React, { Component } from "react";
import PT from "prop-types";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Comments extends Component {
  static propTypes = {
    comments: PT.array.isRequired,
    postComment: PT.func.isRequired
  };

  render() {
    return (
      <div className="comments">
        {this.props.username ? (
          <AddComment
            eventHandler={this.props.eventHandler}
            newComment={this.props.newComment}
            postComment={this.props.postComment}
          />
        ) : (
          <p>You must be logged in to add a comment</p>
        )}
        <Comment
          comments={this.props.comments}
          deleteComment={this.props.deleteComment}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default Comments;
