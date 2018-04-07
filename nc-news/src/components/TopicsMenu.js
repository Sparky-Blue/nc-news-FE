import React, { Component } from "react";
//import PT from "prop-types";
import "./TopicsMenu.css";
import { Link } from "react-router-dom";
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
            {this.state.topics.map((topic, i) => (
              <li key={i}>
                <Link to={`/topics/${topic.slug}/articles`}>{topic.title}</Link>
              </li>
            ))}
          </div>
        </ul>
        <Search />
      </div>
    );
  }

  // static propTypes = {

  // }
}

export default TopicsMenu;
