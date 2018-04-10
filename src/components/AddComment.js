import React from "react";

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

export default AddComment;
