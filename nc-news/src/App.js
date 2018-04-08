import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Screens/Home";
import ArticlesByTopic from "./Screens/ArticlesByTopic";
import User from "./Screens/User";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper app">
          <Header />
          <Route path="/" component={Home} />
          <Route path="/topics/:topic/articles" component={ArticlesByTopic} />
          <Route path="/users/:username" component={User} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
