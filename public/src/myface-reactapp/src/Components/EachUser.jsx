import React from "react"

export function EachUser(props){
    return (
        <div>
            <h2>{props.post.message}</h2>
            <img className = "indvidual-Image" src = {props.post.imageUrl} alt = {props.post.message} key={props.index}/>
            <p>{props.post.createdAt}</p>
        </div> 
    )
}
