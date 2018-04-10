import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">
        <p>Return to home</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
