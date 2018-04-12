import React from "react";
import PropTypes from "prop-types";

const AddComment = ({ postComment, newComment, eventHandler }) => {
  return (
    <div className="input" id="addComment">
      Add comment:
      <input
        type="text"
        onChange={eventHandler}
        value={newComment}
        onKeyUp={e => {
          if (e.key === "Enter") postComment(newComment);
        }}
      />
      <button onClick={() => postComment(newComment)}>Submit</button>
    </div>
  );
};

AddComment.propTypes = {
  postComment: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired
};

export default AddComment;
