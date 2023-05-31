import "../App.css"
import { Link } from "react-router-dom";

function ArticleCard({ article }) {

    return (
            <article className="card_container">
                <header>{article.title}</header>
                <Link to={"/articles/"+article.article_id}> <img className="card_image" src={article.article_img_url} /> <br /></Link>
               
                <div className="card_footer">
                    <p id="comment_count">{article.comment_count} comments</p>
                    <p>by {article.author}</p>
                    <p> {article.topic}</p>
                    <p> {article.votes} votes</p>
                    </div>
            </article>
    )
}

export default ArticleCard