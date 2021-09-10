import React, {useEffect, useState} from "react";
import { EachPost } from "./EachPosts";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from "react-router";
//fetch from APi using useEffect
// extract json == array of objects
// set the JSon as posts - useState
// for each object you create an image tag with the message, image and creator == map which creates a new array

export function GetPosts(){
    const [posts,setPosts] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const fetchPosts = async function() {
            const response = await fetch(`http://localhost:3001/posts/?page=${pageNumber}&pageSize=10`);
            const json = await response.json();
            setPosts(json.results); 
                   console.log(json.results)
        } 

        fetchPosts();

    }, [pageNumber]);

   

  return (
      <div className ="posts-page" >
        <header>
            <h1>Posts</h1>
        </header>
            {posts.map(
                function(post, index){
                return <EachPost post = {post} key = {index}/>
                })
            } 
        <button type="submit" onClick = {() => {setPageNumber(pageNumber-1)}}>Previous</button>
        <button type="submit" onClick = {() => {setPageNumber(pageNumber+1)}}>Next</button>
      </div>
   )


}

