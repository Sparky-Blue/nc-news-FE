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
      votes,
      _id
    } = this.props.article;
    return (
      <div className="article">
        <h4>{title}</h4>
        <h5>Topic: {topic}</h5>
        <h6>Votes: {votes}</h6>
        <Voter articleId={_id} votes={votes} />
        <h6>Comments: {comments}</h6>
        <h5>Author: {author}</h5>
        <p>{body}</p>
        <Comments articleId={_id} />
      </div>
    );
  }
}

export default Article;
