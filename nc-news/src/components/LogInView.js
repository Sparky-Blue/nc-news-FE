import React from "react";

const LogInView = ({ logInState, eventHandler, authenticateUser, signout }) => {
  const { username, newUser, usernameError } = logInState;
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
          <button onClick={() => authenticateUser(newUser)} name="Log in">
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

export default LogInView;
