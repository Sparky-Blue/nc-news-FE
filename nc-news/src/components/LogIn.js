import React, { Component } from "react";
import "./LogIn.css";
import API from "../utils/API";
import LogInView from "./LogInView";

class LogIn extends Component {
  state = {
    username: this.props.username,
    newUser: "",
    usernameError: false
  };

  authenticateUser = username => {
    return API.getUser(username).then(user => {
      if (user.user)
        this.setState({
          username,
          newUser: "",
          usernameError: false
        });
      else
        this.setState({
          usernameError: true
        });
    });
  };

  eventHandler = e => {
    const textInput = e.target.value;
    this.saveUserInput(textInput);
  };

  saveUserInput = input => {
    this.setState({
      newUser: input.toLowerCase()
    });
  };

  signout = () => {
    this.setState({
      username: null
    });
  };

  render() {
    return (
      <LogInView
        logInState={this.state}
        eventHandler={this.eventHandler}
        authenticateUser={this.authenticateUser}
        signout={this.signout}
      />
    );
  }
}

export default LogIn;
