import React, { Component } from "react";
import LogIn from "./LogIn";
import "./Header.css";
import TopicsMenu from "./TopicsMenu";

const Header = () => {
  return (
    <div className="titles">
      <h1>NC News</h1>
      <div className="login">
        <LogIn />
        <TopicsMenu />
      </div>
    </div>
  );
};

export default Header;
