import React from "react";
import ArticlesFeed from "./ArticlesFeed";

const Home = ({ articles, loading }) => {
  return (
    <div>
      <ArticlesFeed articles={articles} loading={loading} />
    </div>
  );
};

export default Home;
