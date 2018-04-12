import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

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

Button.propTypes = {
  vote: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  voted: PropTypes.bool.isRequired
};

export default Button;
