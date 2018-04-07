import React from "react";
import "./Loading.css";

const Loading = ({ loading }) => {
  return (
    <div className="loading modal-background">
      <div className="loading-content">
        <div className="loading-circle" />
        <span className="loading-name">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
