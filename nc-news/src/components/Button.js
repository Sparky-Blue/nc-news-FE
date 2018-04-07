import React from "react";

const Button = ({ vote, handleClick, voted }) => {
  return (
    <button
      className={voted ? "disabled" : "active"}
      disabled={voted}
      onClick={() => handleClick(vote)}
    >
      <i className={`far fa-thumbs-${vote}`} />
    </button>
  );
};

export default Button;
