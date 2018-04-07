import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import "./Header.css";
import TopicsMenu from "./TopicsMenu";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <LogIn />
      <TopicsMenu />
    </header>
  );
};

export default Header;
