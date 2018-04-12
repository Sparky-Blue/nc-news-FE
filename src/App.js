import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Screens/Home";
import ArticlesByTopic from "./Screens/ArticlesByTopic";
import User from "./Screens/User";
import Footer from "./components/Footer";
import API from "./utils/API";
import Article from "./Screens/Article";
import PageNotFound from "./components/PageNotFound";

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
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <Home
                    {...props}
                    username={this.state.username}
                    newUser={this.state.newUser}
                    usernameError={this.state.usernameError}
                    eventHandler={this.eventHandler}
                    signout={this.signout}
                    authenticateUserName={this.authenticateUserName}
                  />
                );
              }}
            />
            <Route
              path="/topics/:topic/articles"
              render={props => {
                return (
                  <ArticlesByTopic
                    {...props}
                    username={this.state.username}
                    newUser={this.state.newUser}
                    usernameError={this.state.usernameError}
                    eventHandler={this.eventHandler}
                    signout={this.signout}
                    authenticateUserName={this.authenticateUserName}
                  />
                );
              }}
            />
            <Route path="/users/:username" component={User} />
            <Route
              path={"/articles/:article_id"}
              render={props => {
                return <Article {...props} username={this.state.username} />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
