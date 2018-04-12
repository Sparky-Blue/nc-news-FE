import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Topics = ({ topics }) => {
  return (
    <ul>
      <div id="topics">
        {topics.map((topic, i) => (
          <li key={i}>
            <Link to={`/topics/${topic.slug}/articles`}>{topic.title}</Link>
          </li>
        ))}
      </div>
    </ul>
  );
};

Topics.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Topics;
