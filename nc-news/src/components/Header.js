import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TopicsMenu from "./TopicsMenu";

const Header = ({ username }) => {
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <TopicsMenu />
    </header>
  );
};

export default Header;
