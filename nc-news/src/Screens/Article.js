import React, { Component } from "react";
import { Link } from "react-router-dom";
import PT from "prop-types";
import API from "../utils/API";
import sortBy from "../utils/sortBy";
import Voter from "../components/Voter";
import Comments from "../components/Comments";

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
      const commentsList = sortBy(comments, "created_at");
      this.setState({
        comments: commentsList
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
    const { body, comments, topic, created_by, title, votes } = article;
    return (
      <div className="article">
        <h4>{title}</h4>
        <h5>Topic: {topic}</h5>
        <Voter articleId={id} votes={votes} />
        <h6>Comments: {comments}</h6>
        <h5>
          Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
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
  static propTypes = {
    getArticleById: PT.func.isRequired
  };
}

export default Article;
