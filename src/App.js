import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Screens/Home";
import ArticlesByTopic from "./Screens/ArticlesByTopic";
import User from "./Screens/User";
import Footer from "./components/Footer";
import Article from "./Screens/Article";

class App extends Component {
  state = {
    username: "northcoders",
    newUser: "",
    usernameError: false
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

  authenticateUserName = username => {
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

  signout = () => {
    this.setState({
      username: null
    });
  };

  render() {
    return (
      <Router>
        <div className="wrapper app">
          <Header />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Home
                  {...props}
                  newUser={this.state.newUser}
                  usernameError={this.state.usernameError}
                  eventHandler={this.eventHandler}
                  signout={this.signout}
                  username={this.state.username}
                  authenticateUserName={this.authenticateUserName}
                />
              );
            }}
          />
          <Route path="/topics/:topic/articles" component={ArticlesByTopic} />
          <Route path="/users/:username" component={User} />
          <Route
            path={`/articles/:article_id`}
            render={props => {
              return <Article {...props} username={this.state.username} />;
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
