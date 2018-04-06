import React from "react";

const Voter = ({ articleId = null, commentId = null, votes }) => {
  return (
    <div className="voter">
      <button>
        <i className="fas fa-thumbs-up" />
      </button>
      <p>Votes: {votes}</p>
      <button>
        <i className="far fa-thumbs-down" />
      </button>
    </div>
  );
};

export default Voter;
