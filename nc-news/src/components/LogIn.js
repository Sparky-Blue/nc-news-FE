import React from "react";
import "./LogIn.css";

const LogIn = ({
  logInState,
  eventHandler,
  authenticateUserName,
  signout,
  username,
  newUser,
  usernameError
}) => {
  return (
    <div className="login">
      {usernameError && <p>Please enter a valid username</p>}
      {!username && (
        <div className="newUserLogin">
          <label>
            Enter username<input
              type="text"
              className="username"
              onChange={eventHandler}
              value={newUser}
            />
            Log in
          </label>
          <button onClick={() => authenticateUserName(newUser)} name="Log in">
            Log in
          </button>
        </div>
      )}
      {username && (
        <div>
          <p>
            Welcome, you are logged in as {username}
            <button
              onClick={() => {
                signout();
              }}
            >
              Sign out
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LogIn;
