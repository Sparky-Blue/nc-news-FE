import React, { Component } from "react";
import API from "../utils/API";

class UserView extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    API.getUser(this.props.match.params.username).then(({ user }) => {
      this.setState({
        user
      });
    });
  }

  render() {
    const { name, username, avatar_url } = this.state.user;
    return (
      <div className="col-sm-3 user">
        <div className="card">
          <canvas
            className="header-bg"
            width="250"
            height="70"
            id="header-blur"
          />
          <div className="avatar">
            <img src={avatar_url} alt={`image of ${username}`} />
          </div>
          <div className="content">
            <p>Name: {name}</p>
            <p>Username: {username}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserView;
