import { useState, useEffect } from "react"
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"

import "../App.css"

function ArticleContainer(props) {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchArticles()
            .then((articles) => {
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