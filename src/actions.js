export const POPULATE_COMMENTS = "POPULATE_COMMENT";
export const POPULATE_TOPICS = "POPULATE_TOPICS";
export const POPULATE_ARTICLES = "POPULATE_ARTICLES";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const SET_TOPIC = "SET_TOPIC";
export const CHANGE_USER = "CHANGE_USER";
export const SELECT_ARTICLE = "SELECT_ARTICLE";

//action creators

export function populateComments(comments) {
  return {
    type: POPULATE_COMMENTS,
    comments
  };
}
export function populateArticles(articlesrticles) {
  return {
    type: POPULATE_ARTICLES,
    articles
  };
}
export function populateTopics(topics) {
  return {
    type: POPULATE_TOPICS,
    topics
  };
}

export function setTopic(topic) {
  return {
    type: SET_TOPIC,
    topic
  };
}

export function changeUser(username) {
  return {
    type: CHANGE_USER,
    username
  };
}

export function selectArticle(articleId) {
  return {
    type: SELECT_ARTICLE,
    articleId
  };
}
