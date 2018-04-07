import React from "react";

const AddComment = ({ postComment, newComment, eventHandler }) => {
  return (
    <div className="input" id="addComment">
      Add comment:
      <input type="text" onChange={eventHandler} value={newComment} />
      <button onClick={() => postComment(newComment)}>Submit</button>
    </div>
  );
};

export default AddComment;
