import React from "react";
import { Link } from "react-router-dom";
import Voter from "./Voter";
import "./ArticlesDisplay.css";
import PropTypes from "prop-types";

const ArticleDisplay = ({ articles }) => {
  return (
    <ul className="articleFeed">
      {articles.map((article, i) => {
        const { comments, topic, created_by, title, votes, _id } = article;
        return (
          <li key={i}>
            <div className="articleDisplay">
              <div className="articleItem">
                <h4>
                  <Link to={`/articles/${_id}`}>{title}</Link>
                </h4>
                <h5>{topic}</h5>
                <h6>Comments: {comments}</h6>
                <h5>
                  Author: <Link to={`/users/${created_by}`}>{created_by}</Link>
                </h5>
              </div>
              <Voter articleId={_id} votes={votes} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ArticleDisplay.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleDisplay;
