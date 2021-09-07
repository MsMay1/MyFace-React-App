import { GetPosts } from "./GetPosts";
import React from "react";


export function EachPost(props){
    return(
        <ul>
            <h2>{props.post.message}</h2>
            <img src = {props.post.imageUrl} alt ={props.post.message} key ={props.index}/>
            <p> {props.post.postedBy.name}</p>
        </ul>
    )
}
  
    