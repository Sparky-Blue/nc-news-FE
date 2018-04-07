import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Screens/Home";
import ArticlesByTopic from "./Screens/ArticlesByTopic";
import User from "./Screens/User";
import Article from "./Screens/Article";
import Footer from "./components/Footer";
import API from "./utils/API";
import sortBy from "./utils/sortBy";
import _ from "underscore";

class App extends Component {
  state = {
    articles: [],
    loadingData: true
  };

  componentDidMount() {
    API.getArticles().then(({ articles }) => {
      const articlesList = sortBy(articles, "votes");
      this.setState({ articles: articlesList, loadingData: false });
    });
  }

  getArticleById = id => {
    let article = {};
    if (this.state.articles.length === 0) return article;
    article = _.findWhere(this.state.articles, { _id: id });
    return article;
  };

  render() {
    return (
      <Router>
        <div className="wrapper app">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                {...this.props}
                articles={this.state.articles}
                loading={this.state.loadingData}
              />
            )}
          />
          <Route
            path="/articles/:article_id"
            render={props => {
              return (
                <Article {...props} getArticleById={this.getArticleById} />
              );
            }}
          />
          <Route path="/topics/:topic/articles" component={ArticlesByTopic} />
          <Route path="/users/:username" component={User} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
