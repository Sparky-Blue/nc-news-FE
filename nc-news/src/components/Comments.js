import React, { Component } from "react";
import Comment from "./Comment";

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
        <Comment comments={this.props.comments} />
      </div>
    );
  }
}

export default Comments;
