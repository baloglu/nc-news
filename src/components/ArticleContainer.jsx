import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import "../App.css"

function ArticleContainer(props) {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("https://news-backend-vnab.onrender.com/api/articles")
            .then(result => {
             return result.json()
            })
            .then(({articles}) => {
                console.log(articles)
            setArticles(articles)
        })
    },[])
    return (
        <>
            <section className="article_container">
            {
                articles.map(article => {
                    return (
                            <ArticleCard key={ article.article_id }  article={ article } />
                    )
                })
            }
            </section>
        </>
    )
}

export default ArticleContainer