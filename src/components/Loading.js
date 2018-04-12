import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading modal-background mask">
      <div className="loading-content modal">
        <div className="loading-circle" />
        <span className="loading-name">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
