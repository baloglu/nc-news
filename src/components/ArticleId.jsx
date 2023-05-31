import "../App.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ArticleId() {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://news-backend-vnab.onrender.com/api/articles/${article_id}`)
            .then(result => {
             return result.json()
            })
            .then(({ article }) => {
                console.log(article)
                setArticle({ ...article })
                setIsLoading(false)
        })
    }, [article_id])
    return (
        <article id="article_container">
            <div id="article_title">
                {article.title}
            </div>
            <div id="article_img_container">
                <img id="article_img" src={article.article_img_url} />
            </div>
            <div id="article_body_container">
                <p>{article.body} </p>
            </div>
        </article>
    )
}
/* 
article_id
: 
34
article_img_url
: 
"https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
author
: 
"grumpy19"
body
: 
"The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all."
created_at
: 
"2020-11-22T11:13:00.000Z"
title
: 
"The Notorious MSG’s Unlikely Formula For Success"
topic
: 
"cooking"
votes
: 
0
*/
export default ArticleId