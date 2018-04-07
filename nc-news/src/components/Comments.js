import React, { Component } from "react";
import PT from "prop-types";
import Comment from "./Comment";
import AddComment from "./AddComment";

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
    return (
      <div className="comments">
        <AddComment
          eventHandler={this.eventHandler}
          newComment={this.state.newComment}
          postComment={this.props.postComment}
        />
        <Comment comments={this.props.comments} />
      </div>
    );
  }
  static propTypes = {
    comments: PT.array.isRequired,
    postComment: PT.func.isRequired
  };
}

export default Comments;
