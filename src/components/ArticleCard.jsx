import "../App.css"
function ArticleCard({ article }) {
    
    return (
        <>
            <article className="card_container">
            <header>{article.title}</header>
            <img className="card_image" src={article.article_img_url} /> <br />
            <div className="card_footer">
                <p id="comment_count">{article.comment_count} comments</p>
                <p>by {article.author}</p>
                <p> {article.topic}</p>
                <p> {article.votes} votes</p>
                </div>
            </article>
            
            
        </>
    )
}

export default ArticleCard