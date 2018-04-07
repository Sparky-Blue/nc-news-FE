import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Comments from "./components/Comments";
import UserView from "./components/UserView";
import Article from "./components/Article";
import Footer from "./components/Footer";
import API from "./utils/API";
import sortArticlesByVotes from "./utils/sortArticlesByVotes";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    API.getArticles().then(({ articles }) => {
      articles = sortArticlesByVotes(articles);
      this.setState({
        articles
      });
    });
  }

  getArticleById = id => {
    const article = this.state.articles.reduce((acc, article) => {
      if (article._id === id) acc = article;
      return acc;
    }, {});
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
              <Home {...this.props} articles={this.state.articles} />
            )}
          />
          <Route path="/topics/:topic/articles" component={ArticlesByTopic} />
          <Route path="/articles/:article_id/comments" component={Comments} />
          <Route path="/users/:username" component={UserView} />
          <Route
            path="/articles/:article_id"
            render={props => {
              return (
                <Article {...props} getArticleById={this.getArticleById} />
              );
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
