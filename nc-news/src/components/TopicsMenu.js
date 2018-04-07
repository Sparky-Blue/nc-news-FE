import React, { Component } from "react";
import "./TopicsMenu.css";
import Search from "./Search";
import Topics from "./Topics";
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
        <Topics topics={this.state.topics} />
        <Search />
      </div>
    );
  }
}

export default TopicsMenu;
