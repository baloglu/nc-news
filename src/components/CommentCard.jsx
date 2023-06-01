import { useState, useEffect } from "react"
import { fetchComments } from "../utils/api";
import Loading from "./Loading";

  
const CommentCard = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isCommentsLoading, setIsCommentsLoading] = useState(false)

    useEffect(() => {
        setIsCommentsLoading(true);
        fetchComments(article_id)
        .then((comments) => {
            const formattedComments = comments.map(comment => {
                const formattedDate = new Date(comment.created_at)
                return {...comment, formatted_date: formattedDate.toLocaleString("en-GB")}
            })

            setComments([...formattedComments]);
            setIsCommentsLoading(false);
        });
    }, [article_id]);
    
    return <section className="comments">
        {isCommentsLoading ? <Loading /> : comments.map((comment) => {
            return <div className="comment_row" key={comment.comment_id}>
                <p className="comment_body">{comment.body}</p>
                <div className="comment_meta">
                    <span className="comment_meta_item">{"Votes: " + comment.votes}</span>
                    <span className="comment_meta_item">{"Posted on: "+ comment.formatted_date}</span>
                    <span className="comment_meta_item">{"Posted by: "+ comment.author}</span></div>
            </div>
        })}

    </section>
}

export default CommentCard