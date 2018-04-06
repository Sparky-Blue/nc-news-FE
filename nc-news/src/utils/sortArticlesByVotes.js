const sortArticlesByVotes = articles => {
  return articles.sort((a, b) => {
    if (a.votes > b.votes) return -1;
    if (a.votes < b.votes) return 1;
    return 0;
  });
};

export default sortArticlesByVotes;
