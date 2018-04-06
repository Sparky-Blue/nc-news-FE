import React, { Component } from "react";
//import PT from "prop-types";
import "./TopicsMenu.css";
import { Link } from "react-router-dom";
import ArticlesByTopic from "./ArticlesByTopic";
import Search from "./Search";
import API from "../utils/API";

class TopicsMenu extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    API.getTopics().then(({ topics }) =>
      this.setState({
        topics
      })
    );
  }

  render() {
    return (
      <div className="topicsMenu">
        <ul>
          <div id="topics">
            {this.state.topics.map(topic => (
              <li>
                <Link to="#">{topic.title}</Link>
              </li>
            ))}
          </div>
        </ul>
        <Search />
      </div>
    );
  }
}

export default TopicsMenu;
