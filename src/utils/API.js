import axios from "axios";
const APIroute = "https://gentle-harbor-63950.herokuapp.com/api";

const API = {
  getArticles: () => {
    return axios.get(`${APIroute}/articles`).then(response => response.data);
  },
  getTopics: () => {
    return axios.get(`${APIroute}/topics`).then(response => response.data);
  },
  getArticlesByTopic: topic => {
    return axios
      .get(`${APIroute}/topics/articles/${topic}`)
      .then(response => response.data);
  },
  getCommentsByArticle: articleId => {
    return axios
      .get(`${APIroute}/articles/${articleId}/comments`)
      .then(response => response.data);
  },
  getUser: username => {
    return axios
      .get(`${APIroute}/users/${username}`)
      .then(response => response.data);
  },
  postComment: (articleId, comment, username) => {
    return axios
      .post(`${APIroute}/articles/${articleId}/comments?username=${username}`, {
        comment: `${comment}`
      })
      .then(response => response);
  },
  putArticleVote: (articleId, vote) => {
    return axios
      .put(`${APIroute}/articles/${articleId}?vote=${vote}`)
      .then(response => response.data);
  },
  putCommentVote: (commentId, vote) => {
    return axios
      .put(`${APIroute}/comments/${commentId}?vote=${vote}`)
      .then(response => response.data);
  },
  deleteComment: commentId => {
    return axios
      .delete(`${APIroute}/comments/${commentId}`)
      .then(response => response.data);
  }
};

export default API;
