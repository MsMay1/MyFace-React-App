import React, {useEffect, useState} from "react";
import { EachPost } from "./EachPosts";

//fetch from APi using useEffect
// extract json == array of objects
// set the JSon as posts - useState
// for each object you create an image tag with the message, image and creator == map which creates a new array

export function GetPosts(){
    const [posts,setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async function() {
            const response = await fetch("http://localhost:3001/posts");
            const json = await response.json();
            setPosts(json.results);
        } 

        fetchPosts();
        
        
    }, []);

  return posts.map(
        function(post, index){
            return <EachPost post = {post} key = {index}/>
        }
   )


}

