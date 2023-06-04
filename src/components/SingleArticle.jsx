import "../App.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle } from "../utils/api";
import CommentCard from "./CommentCard"
import Loading from "./Loading";
import axios from "axios";

function SingleArticle() {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
  const [votes, setVotes] = useState(JSON.parse(localStorage.getItem("votes")) || { articles: {}, comments: {} });
  const [articleVote, setArticleVote] = useState()
    // votes will be an object
  // votes = { "articles": {"1": 1}, "comments": { "35": -1}}
    useEffect(() => {
      const storedVote = JSON.parse(localStorage.getItem("votes"));
      if (storedVote?.articles.hasOwnProperty(article_id)) {
        setVotes(structuredClone(votes));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("votes", JSON.stringify(votes));
    }, [votes.articles[article_id]]);
  
  const upVote = () => {
    if (votes.articles[article_id] != 1) {
          votes.articles[article_id] = 1
    axios.patch(`https://news-backend-vnab.onrender.com/api/articles/${article_id}`, { inc_votes: articleVote + 1 })
      .then((result) => {
        setArticleVote(result.data.article.votes)
      })
    setVotes(structuredClone(votes));
    }

    
  };

  const downVote = () => {
    if (votes.articles[article_id] != -1) {
    votes.articles[article_id] = -1
    axios.patch(`https://news-backend-vnab.onrender.com/api/articles/${article_id}`, { inc_votes: articleVote - 1 })
    .then((result) => {
      setArticleVote(result.data.article.votes)
    })
      setVotes(structuredClone(votes));
     }

  };
    

    useEffect(() => {
        setIsLoading(true);
        fetchArticle(article_id)
          .then((article) => {
            setArticle({ ...article });
            setIsLoading(false);
            setArticleVote(article.votes)
          });
      }, [article_id]);
    

    const Content = <article id="article_container">
        <div id="article_title">
            {article.title}
        </div>
        <div id="article_img_container">
            <img id="article_img" src={article.article_img_url} />
        </div>
        <div id="article_body_container">
            <p>{article.body} </p>
        </div>
        
        
        <section className="votes_comment_container">

          <div className="article_votes">Votes:{articleVote}
            <button onClick={upVote}>up</button>
            <button onClick={downVote}>down</button>
          </div>

          <div id="article_topic">
              <p>{article.topic} </p>
          </div>
              
          <button className="add_comment">
            Add comment
        </button>
        </section>

        <CommentCard article_id={ article_id } />
    </article>
    
    return (
        isLoading ? <Loading /> : Content  
    )
}

export default SingleArticle