import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import "./Header.css";
import TopicsMenu from "./TopicsMenu";

const Header = () => {
  return (
    <div className="titles">
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <div className="login">
        <LogIn />
        <TopicsMenu />
      </div>
    </div>
  );
};

export default Header;
