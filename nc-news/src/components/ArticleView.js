import React from "react";
import { Link } from "react-router-dom";
import Voter from "../components/Voter";
import Comments from "../components/Comments";
import Loading from "../components/Loading";

const ArticleView = ({
  article,
  allComments,
  postComment,
  username,
  deleteComment,
  eventHandler,
  newComment,
  loading
}) => {
  const { body, comments, topic, created_by, _id, title, votes } = article;
  return (
    <div className="article">
      {loading && <Loading loading={loading} />}
      <h4>{title}</h4>
      <h5>Topic: {topic}</h5>
      <Voter articleId={_id} votes={votes} />
      <h6>Comments: {comments}</h6>
      <h5>
        Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
      </h5>
      <p className="body">{body}</p>
      <Comments
        comments={allComments}
        postComment={postComment}
        username={username}
        deleteComment={deleteComment}
        eventHandler={eventHandler}
        newComment={newComment}
      />
    </div>
  );
};

export default ArticleView;
