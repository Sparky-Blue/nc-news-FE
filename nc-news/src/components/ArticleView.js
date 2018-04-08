import React from "react";
import { Link } from "react-router-dom";
import Voter from "../components/Voter";
import Comments from "../components/Comments";

const ArticleView = ({
  article,
  allComments,
  postComment,
  username,
  deleteComment
}) => {
  const {
    body,
    comments,
    topic,
    created_by,
    article_id,
    title,
    votes
  } = article;
  return (
    <div className="article">
      <h4>{title}</h4>
      <h5>Topic: {topic}</h5>
      <Voter articleId={article_id} votes={votes} />
      <h6>Comments: {comments}</h6>
      <h5>
        Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
      </h5>
      <p className="body">{body}</p>
      <Comments
        articleId={article_id}
        comments={allComments}
        postComment={postComment}
        username={username}
        deleteComment={deleteComment}
      />
    </div>
  );
};

export default ArticleView;
