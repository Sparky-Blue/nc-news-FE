import React from "react";
import ArticlesFeed from "../components/ArticlesFeed";
import PropTypes from "prop-types";

const Home = ({
  newUser,
  usernameError,
  eventHandler,
  signout,
  username,
  authenticateUserName
}) => {
  return (
    <div className="home">
      <ArticlesFeed
        newUser={newUser}
        usernameError={usernameError}
        eventHandler={eventHandler}
        signout={signout}
        username={username}
        authenticateUserName={authenticateUserName}
      />
    </div>
  );
};

Home.propTypes = {
  newUser: PropTypes.string.isRequired,
  username: PropTypes.string,
  usernameError: PropTypes.bool.isRequired,
  eventHandler: PropTypes.func.isRequired,
  signout: PropTypes.func.isRequired,
  authenticateUserName: PropTypes.func.isRequired
};
export default Home;
