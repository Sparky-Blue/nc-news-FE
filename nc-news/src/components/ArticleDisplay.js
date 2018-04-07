import React from "react";
import { Link } from "react-router-dom";
import Voter from "./Voter";

const ArticleDisplay = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, i) => {
        const { comments, topic, created_by, title, votes, _id } = article;
        return (
          <li key={i}>
            <h4>
              <Link to={`/articles/${_id}`}>{title}</Link>
            </h4>
            <h5>{topic}</h5>
            <Voter articleId={_id} votes={votes} />
            <h6>Comments: {comments}</h6>
            <h5>
              Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
            </h5>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleDisplay;
