import React from "react";
import "./Button.css";

const Button = ({ vote, handleClick, voted }) => {
  return (
    <button
      className={voted ? "voteButton disabled" : "voteButton active"}
      disabled={voted}
      onClick={() => handleClick(vote)}
    >
      <i className={`far fa-thumbs-${vote}`} />
    </button>
  );
};

export default Button;
