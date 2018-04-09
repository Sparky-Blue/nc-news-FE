import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TopicsMenu from "./TopicsMenu";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div id="title">
          <img
            src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png"
            alt="northcoders logo"
            id="ncLogo"
          />
          <h1>NEWS</h1>
        </div>
      </Link>
      <TopicsMenu />
    </header>
  );
};

export default Header;
