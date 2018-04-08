import React from "react";
import Loading from "./Loading";
import ArticleDisplay from "./ArticleDisplay";

const ArticleFeed = ({ loading, articles }) => {
  return (
    <div>
      {loading && <Loading loading={loading} />}
      <ArticleDisplay articles={articles} />
    </div>
  );
};

export default ArticleFeed;
