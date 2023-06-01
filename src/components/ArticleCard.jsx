import "../App.css"
import { Link } from "react-router-dom";

function ArticleCard({ article }) {

    return (
        <Link to={"/articles/"+article.article_id}  className="card_container"> 
            <article>
                <header>{article.title}</header>
                <img className="card_image" src={article.article_img_url} /> <br />
               
                <div className="card_footer">
                    <p id="comment_count">{article.comment_count} comments</p>
                    <p>by {article.author}</p>
                    <p> {article.topic}</p>
                    <p> {article.votes} votes</p>
                    </div>
            </article>
        </Link>
    )
}

export default ArticleCard