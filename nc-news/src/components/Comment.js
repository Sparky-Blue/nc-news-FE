import React from "react";
import Voter from "./Voter";
import displayDate from "../utils/displayDate";
import "./Comment.css";

const Comment = ({ comments, deleteComment, username }) => {
  return (
    <ul>
      {comments.map((comment, i) => {
        const { body, created_by, _id, votes, created_at } = comment;
        const dateCreated = displayDate(created_at);
        return (
          <li key={i}>
            <div className="comment">
              <div className="commentText">
                <p className="body">{body}</p>
                <p>comment from: {created_by.username}</p>
                <p>added on: {dateCreated}</p>
                {username === created_by.username && (
                  <button onClick={() => deleteComment(_id)}> Delete</button>
                )}
              </div>
              <Voter commentId={_id} votes={votes} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
