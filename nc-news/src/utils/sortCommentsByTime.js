const sortCommentsByTime = comments => {
  return comments.sort((a, b) => {
    return b.created_at - a.created_at;
  });
};

export default sortCommentsByTime;
