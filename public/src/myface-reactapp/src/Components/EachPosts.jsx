import React from "react";
import { Link } from "react-router-dom";


export function EachPost(props) {
    const likesArr = props.post.likedBy
    const numOfLikes = likesArr.length

    const dislikesArr = props.post.dislikedBy
    const numOfDislikes = dislikesArr.length
    return (
        <ol>
            <h2>{props.post.message}</h2>
            <img src={props.post.imageUrl} alt={props.post.message} key={props.index} />
            <a href={`/users/${props.post.postedBy.id}`} >
                <p> {props.post.postedBy.name}</p>
            </a>
            
            <form method="post" action= {`http://localhost:3001/posts/${props.post.id}/like/`} >
                <div> 
                    {numOfLikes} 
                    <button type="submit" id="like">  Like </button>
                </div>
            </form>

            <form method="post" action={`http://localhost:3001/posts/${props.post.id}/dislike/`}>
               <div>
                   {numOfDislikes}
                    <button type="submit" id="dislike" > Dislike </button>
                </div>
            </form>
        </ol>
    )
}

