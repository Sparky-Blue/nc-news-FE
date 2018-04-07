import React, { Component } from "react";
import API from "../utils/API";
import Button from "./Button";
import Votes from "./Votes";

class Voter extends Component {
  state = {
    votes: this.props.votes,
    voted: false
  };

  handleClick = value => {
    if (this.state.voted) return;
    const { articleId, commentId } = this.props;
    const vote = value;
    if (articleId) this.changeArticleVote(vote);
    if (commentId) this.changeCommentVote(vote);
  };

  changeArticleVote = vote => {
    const { articleId, votes } = this.props;
    API.putArticleVote(articleId, vote).then(res => {
      this.setState({
        voted: true,
        votes: vote === "up" ? +votes + 1 : +votes - 1
      });
    });
  };

  changeCommentVote = vote => {
    const { commentId, votes } = this.props;
    API.putCommentVote(commentId, vote).then(res => {
      this.setState({
        voted: true,
        votes: vote === "up" ? +votes + 1 : +votes - 1
      });
    });
  };

  render() {
    return (
      <div className="voter">
        <Button
          vote="up"
          handleClick={this.handleClick}
          voted={this.state.voted}
        />
        <Votes votes={this.state.votes} />
        <Button
          vote="down"
          handleClick={this.handleClick}
          voted={this.state.voted}
        />
      </div>
    );
  }
}

export default Voter;
