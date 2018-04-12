/*
{articles: [{}],
topics: [{}],
comments: [{}],
username: '',
users: [{}],
article: {},
loading: true
}

*/

import { combineReducers } from "redux";
import {
  ADD_COMMENTS,
  DELETE_COMMENT,
  SET_TOPIC,
  CHANGE_USER
} from "./actions";
import produce from "immer";

function articles(state = [], action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return [...action.comments];
    default:
      return state;
  }
}
