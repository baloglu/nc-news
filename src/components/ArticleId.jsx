import "../App.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle, fetchComments } from "../utils/api";

import Loading from "./Loading";

function ArticleId() {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isCommentsLoading, setIsCommentsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetchArticle(article_id)
          .then((article) => {
            console.log(article);
            setArticle({ ...article });
            setIsLoading(false);
          });
      }, [article_id]);
    
      useEffect(() => {
        setIsCommentsLoading(true);
        fetchComments(article_id)
          .then((comments) => {
            console.log(comments);
            setComments([...comments]);
            setIsCommentsLoading(false);
          });
      }, [article_id]);

    const Comment = <section className="comments"> 
        { isCommentsLoading ? <Loading /> : <p>{comments.length}</p> }
        
    </section>

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
        
            <button className="article_votes">Votes:{article.votes} </button>

            <div id="article_topic">
            <p>{article.topic} </p>
        </div>
            
            <button className="add_comment">
                Add comment
            </button>
        </section>
    </article>
    
    return (
        isLoading ? <Loading /> : Content  
    )
}

export default ArticleId