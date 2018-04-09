import React, { Component } from "react";
import Loading from "../components/Loading";
import API from "../utils/API";

class User extends Component {
  state = {
    user: [],
    loading: true
  };

  componentDidMount() {
    API.getUser(this.props.match.params.username).then(({ user }) => {
      this.setState({
        user,
        loading: false
      });
    });
  }

  render() {
    const { name, username, avatar_url } = this.state.user;
    return (
      <div className="col-sm-3 user">
        {this.state.loading && <Loading loading={this.state.loading} />}
        <div className="card">
          <canvas
            className="header-bg"
            width="250"
            height="70"
            id="header-blur"
          />
          <div className="avatar">
            <img src={avatar_url} alt={`${username}`} />
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

export default User;
