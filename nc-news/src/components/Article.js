import React, { Component } from "react";
import Voter from "./Voter";
import Comments from "./Comments";

class Article extends Component {
  render() {
    const id = this.props.match.params.article_id;
    const article = this.props.getArticleById(id);
    const { body, comments, topic, created_by: author, title, votes } = article;
    return (
      <div className="article">
        <h4>{title}</h4>
        <h5>Topic: {topic}</h5>
        <h6>Votes: {votes}</h6>
        <Voter articleId={id} votes={votes} />
        <h6>Comments: {comments}</h6>
        <h5>Author: {author}</h5>
        <p>{body}</p>
        <Comments articleId={id} />
      </div>
    );
  }
}

export default Article;
