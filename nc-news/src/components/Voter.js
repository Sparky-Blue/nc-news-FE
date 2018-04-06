import React from "react";
import API from "../utils/API";

const Voter = ({ articleId = null, commentId = null, votes, changeVote }) => {
  const handleClick = value => {
    const vote = value;
    if (articleId) changeArticleVote(vote);
    if (commentId) changeCommentVote(vote);
  };

  const changeArticleVote = vote => {
    API.putArticleVote(articleId, vote).then();
  };

  const changeCommentVote = vote => {
    API.putCommentVote(commentId, vote).then();
  };

  return (
    <div className="voter">
      <button onClick={() => handleClick("up")}>
        <i className="fas fa-thumbs-up" />
      </button>
      <p>Votes: {votes}</p>
      <button onClick={() => handleClick("down")}>
        <i className="far fa-thumbs-down" />
      </button>
    </div>
  );
};

export default Voter;
