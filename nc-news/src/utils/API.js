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
  getUsers: username => {
    return axios
      .get(`${APIroute}/users/${username}`)
      .then(response => response.data);
  }
};

export default API;
