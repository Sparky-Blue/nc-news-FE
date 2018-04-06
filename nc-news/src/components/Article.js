import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Voter from "./Voter";
import Comments from "./Comments";
import sortCommentsByTime from "../utils/sortCommentsByTime";

class Article extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.refreshComments();
  }

  refreshComments() {
    const articleId = this.props.match.params.article_id;
    API.getCommentsByArticle(articleId).then(({ comments }) => {
      comments = sortCommentsByTime(comments);
      this.setState({
        comments
      });
    });
  }

  postComment = comment => {
    API.postComment(this.props.match.params.article_id, comment).then(res =>
      this.refreshComments()
    );
  };

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
        <h5>
          Author: <Link to={`./users/${author}`}>{author}</Link>
        </h5>
        <p>{body}</p>
        <Comments
          articleId={id}
          comments={this.state.comments}
          postComment={this.postComment}
        />
      </div>
    );
  }
}

export default Article;
