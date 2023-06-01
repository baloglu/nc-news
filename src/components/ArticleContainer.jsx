import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"

import "../App.css"

function ArticleContainer(props) {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://news-backend-vnab.onrender.com/api/articles")
            .then(result => {
             return result.json()
            })
            .then(({articles}) => {
                setArticles(articles)
                setIsLoading(false)
        })
    }, [])
    
    const content = (
        <section className="article_container">
            {
                articles.map(article => {
                    return (
                        <ArticleCard key={ article.article_id }  article={ article } />
                            
                    )
                })
            }
            </section>
    )
    return (
        <>
            {isLoading ? <Loading /> : content}
            
        </>
    )
}

export default ArticleContainer