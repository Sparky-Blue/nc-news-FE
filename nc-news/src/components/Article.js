import React, { Component } from "react";
import Voter from "./Voter";
import Comments from "./Comments";

class Article extends Component {
  render() {
    const {
      body,
      comments,
      topic,
      created_by: author,
      title,
      votes
    } = this.props.article;
    return (
      <div className="article">
        <h4>{title}</h4>
        <h5>{topic}</h5>
        <h6>Votes: {votes}</h6>
        <Voter />
        <h6>Comments: {comments}</h6>
        <Comments />
        <h5>Author: {author}</h5>
        <p>{body}</p>
      </div>
    );
  }
}

export default Article;
