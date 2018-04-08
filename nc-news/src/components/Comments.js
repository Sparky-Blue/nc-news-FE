import React, { Component } from "react";
import PT from "prop-types";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    newComment: ""
  };

  static propTypes = {
    comments: PT.array.isRequired,
    postComment: PT.func.isRequired
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
    return (
      <div className="comments">
        {this.props.username ? (
          <AddComment
            eventHandler={this.eventHandler}
            newComment={this.state.newComment}
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
