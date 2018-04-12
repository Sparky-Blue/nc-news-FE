import React from "react";
import ArticlesFeed from "../components/ArticlesFeed";

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

export default Home;
