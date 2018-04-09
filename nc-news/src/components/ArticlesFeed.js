import React from "react";
import Loading from "./Loading";
import ArticleDisplay from "./ArticleDisplay";
import Search from "./Search";

const ArticleFeed = ({ loading, articles }) => {
  return (
    <div>
      {loading && <Loading loading={loading} />}
      <Search articles={articles} />
      <ArticleDisplay articles={articles} />
    </div>
  );
};

export default ArticleFeed;
