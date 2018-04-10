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
import sortBy from "./utils/sortBy";
import LogIn from "./components/LogIn";

class App extends Component {
  state = {
    articles: [],
    loading: true,
    username: "northcoders",
    newUser: "",
    usernameError: false
  };

  componentDidMount() {
    this.updateArticles();
  }

  updateArticles = () => {
    API.getArticles().then(({ articles }) => {
      const articlesList = sortBy(articles, "votes");
      this.setState({ articles: articlesList, loading: false });
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
    const { articles, loading, username, newUser, usernameError } = this.state;
    return (
      <Router>
        <div className="wrapper app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/topics/:topic/articles" component={ArticlesByTopic} />
          <Route path="/users/:username" component={User} />
          <Route
            path={`/articles/:article_id`}
            render={props => {
              return <Article {...props} username={username} />;
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
