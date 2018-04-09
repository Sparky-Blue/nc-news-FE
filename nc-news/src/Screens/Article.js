import React, { Component } from "react";
import PT from "prop-types";
import API from "../utils/API";
import sortBy from "../utils/sortBy";
import ArticleView from "../components/ArticleView";
import "./Article.css";
import _ from "underscore";

class Article extends Component {
  state = {
    comments: [],
    article: {},
    article_id: this.props.match.article_id,
    newComment: ""
  };

  static propTypes = {
    username: PT.string
  };

  componentDidMount() {
    this.refreshArticle();
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

  eventHandler = e => {
    const textInput = e.target.value;
    this.saveNewComment(textInput);
  };

  saveNewComment = input => {
    this.setState({
      newComment: input
    });
  };

  postComment = comment => {
    API.postComment(
      this.props.match.params.article_id,
      comment,
      this.props.username
    ).then(res => {
      this.refreshComments();
      this.setState({
        newComment: ""
      });
    });
  };

  deleteComment = comment_id => {
    API.deleteComment(comment_id).then(res => this.refreshComments());
  };

  refreshArticle = () => {
    API.getArticles().then(({ articles }) => {
      const article = _.findWhere(articles, {
        _id: this.props.match.params.article_id
      });
      this.setState({ article });
    });
  };

  render() {
    return (
      <ArticleView
        article={this.state.article}
        allComments={this.state.comments}
        postComment={this.postComment}
        username={this.props.username}
        deleteComment={this.deleteComment}
        eventHandler={this.eventHandler}
        newComment={this.state.newComment}
      />
    );
  }
}

export default Article;
