import React from "react";
import { Link } from "react-router-dom";
import Voter from "../components/Voter";
import Comments from "../components/Comments";
import Loading from "../components/Loading";
import PageNotFound from "./PageNotFound";
import PropTypes from "prop-types";

const ArticleView = ({
  article,
  allComments,
  postComment,
  username,
  deleteComment,
  eventHandler,
  newComment,
  loading,
  incorrectId
}) => {
  const { body, topic, created_by, _id, title, votes } = article;
  return (
    <div className="article">
      {loading && <Loading loading={loading} />}
      {incorrectId ? (
        <PageNotFound />
      ) : (
        <div>
          <div className="articleView">
            <h4>{title}</h4>
            <h5>Topic: {topic}</h5>
            <Voter articleId={_id} votes={votes} />
            <h5>
              Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
            </h5>
            <p className="body">{body}</p>
          </div>
          <Comments
            comments={allComments}
            postComment={postComment}
            username={username}
            deleteComment={deleteComment}
            eventHandler={eventHandler}
            newComment={newComment}
          />
        </div>
      )}
    </div>
  );
};

ArticleView.propTypes = {
  article: PropTypes.object.isRequired,
  allComments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired,
  username: PropTypes.string,
  deleteComment: PropTypes.func.isRequired,
  eventHandler: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  incorrectId: PropTypes.bool.isRequired
};

export default ArticleView;
