import React from "react";
import PropTypes from "prop-types";

const Votes = ({ votes }) => {
  return <p>Votes: {votes}</p>;
};

Votes.propTypes = {
  votes: PropTypes.number
};

export default Votes;
