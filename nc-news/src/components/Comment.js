import React from "react";
import Voter from "./Voter";
import displayDate from "../utils/displayDate";

const Comment = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment, i) => {
        const { body, created_by, _id, votes, created_at } = comment;
        const dateCreated = displayDate(created_at);
        return (
          <li key={i}>
            <div className="comment">
              <p>{body}</p>
              <h5>comment from: {created_by.username}</h5>
              <p>added on: {dateCreated}</p>
              <Voter commentId={_id} votes={votes} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
