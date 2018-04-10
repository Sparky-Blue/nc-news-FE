import React from "react";
import "./LogIn.css";

const LogIn = ({
  eventHandler,
  authenticateUserName,
  signout,
  username,
  newUser,
  usernameError
}) => {
  return (
    <div className="login">
      {usernameError ? <p>Please enter a valid username</p> : <p> </p>}
      {!username && (
        <div className="newUserLogin">
          <label>
            Enter username:
            <input
              type="text"
              className="username"
              onChange={eventHandler}
              onKeyUp={e => {
                if (e.key === "Enter") authenticateUserName(newUser);
              }}
              value={newUser}
            />
          </label>
          <button onClick={() => authenticateUserName(newUser)}>Log in</button>
        </div>
      )}
      {username && (
        <div>
          <p>Welcome, you are logged in as {username}</p>
          <button
            onClick={() => {
              signout();
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
