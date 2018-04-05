import axios from "axios";
const APIroute = "https://gentle-harbor-63950.herokuapp.com/api";

const API = {
  getArticles: () => {
    return axios.get(`${APIroute}/articles`).then(response => response.data);
  }
};

export default API;
