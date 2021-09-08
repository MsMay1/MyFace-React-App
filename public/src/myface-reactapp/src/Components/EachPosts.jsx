import { GetPosts } from "./GetPosts";
import React from "react";
import { Link } from "react-router-dom";


export function EachPost(props){
    return(
        <ul>
            <h2>{props.post.message}</h2>
            <img src = {props.post.imageUrl} alt ={props.post.message} key ={props.index}/>
            <Link to={`/user/${props.post.postedBy.id}` } >
                <p> {props.post.postedBy.name}</p>
            </Link>
        </ul>
    )
}
  
    