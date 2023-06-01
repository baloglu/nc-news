import "../App.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle } from "../utils/api";
import CommentCard from "./CommentCard"
import Loading from "./Loading";

function SingleArticle() {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetchArticle(article_id)
          .then((article) => {
            setArticle({ ...article });
            setIsLoading(false);
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
        
            <button className="article_votes">Votes:{article.votes} </button>

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