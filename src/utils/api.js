export const fetchArticles = () => {
    return fetch("https://news-backend-vnab.onrender.com/api/articles")
    .then((result) => result.json())
    .then(({articles}) => articles)
};
  
export const fetchArticle = (articleId) => {
    return fetch(`https://news-backend-vnab.onrender.com/api/articles/${articleId}`)
      .then((result) => result.json())
      .then(({ article }) => article);
  };
  
  export const fetchComments = (articleId) => {
    return fetch(`https://news-backend-vnab.onrender.com/api/articles/${articleId}/comments`)
      .then((result) => result.json())
      .then(({ comments }) => comments);
  };