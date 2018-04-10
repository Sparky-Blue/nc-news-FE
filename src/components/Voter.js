import React, { Component } from "react";
import API from "../utils/API";
import Button from "./Button";
import Votes from "./Votes";
import produce from "immer";

class Voter extends Component {
  state = {
    votes: this.props.votes,
    voted: false
  };

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.votes !== prevState.votes) {
      return {
        votes: newProps.votes
      };
    }
    return null;
  }

  handleClick = value => {
    if (this.state.voted) return;
    const { articleId, commentId } = this.props;
    const vote = value;
    if (articleId) this.changeArticleVote(vote);
    if (commentId) this.changeCommentVote(vote);
  };

  changeArticleVote = vote => {
    const { articleId } = this.props;
    API.putArticleVote(articleId, vote).then(res => {
      this.setState(
        produce(draft => {
          draft.voted = true;
          vote === "up" ? ++draft.votes : --draft.votes;
        })
      );
    });
  };

  changeCommentVote = vote => {
    const { commentId } = this.props;
    API.putCommentVote(commentId, vote).then(res => {
      this.setState(
        produce(draft => {
          draft.voted = true;
          vote === "up" ? ++draft.votes : --draft.votes;
        })
      );
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
