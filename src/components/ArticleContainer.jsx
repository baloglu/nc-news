import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
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
    
    const loading = (
        <div className="loading-container">
          <p className="loading-text">Loading</p>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )
    
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
            {isLoading ? loading : content}
            
        </>
    )
}

export default ArticleContainer