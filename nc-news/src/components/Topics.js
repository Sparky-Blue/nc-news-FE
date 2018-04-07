import React from "react";
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

export default Topics;
